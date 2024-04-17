"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserItem() {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
      <div className="text-white font-[700] flex items-center justify-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.pngvmhgckgc" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">Joban Dhindsa</p>
        <p className="text-[12px] text-neutral-500">joban.d555@gmail.com</p>
      </div>
    </div>
  );
}
