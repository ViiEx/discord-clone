"use client";

import { useModal } from "@/hooks/use-modal-store";

export const ChangeAvatar = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <button
        onClick={() => onOpen("changeAvatar")}
        type="button"
        className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
      >
        Change avatar
      </button>
      <p className="mt-2 text-xs leading-5 text-gray-400">
        JPG, GIF or PNG. 4MB max.
      </p>
    </div>
  );
};
