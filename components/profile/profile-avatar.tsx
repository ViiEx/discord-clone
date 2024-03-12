import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";

export const ProfileAvatar = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  return (
    <img
      src={profile.imageUrl}
      alt=""
      className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
    />
  );
};
