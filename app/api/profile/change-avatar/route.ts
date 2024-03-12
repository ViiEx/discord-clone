import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const { imageUrl } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const profileUpdate = await db.profile.update({
      where: { id: profile.id },
      data: {
        imageUrl,
      },
    });

    return NextResponse.json(profileUpdate);
  } catch (error) {
    console.error("[PROFILE_PATCH]", error);

    return new NextResponse("Internal Error", { status: 500 });
  }
}
