"use client";

import Link from "next/link";
import UserItem from "./ui/UserItem";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export default function Sidebar() {
  const { user, isLoaded } = useUser();

  return (
    <div className="w-[300px] min-width-[300px] border-r min-h-screen">
      {isLoaded && user && (
        <div className="flex flex-col gap-4 p-4 min-h-screen">
          <div>
            <UserItem />
          </div>
          <div className="grow flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/reports">Reports</Link>
            <Link href="/extra">Extra</Link>
            <Link href="/extra">Profile</Link>
            <Link href="/extra">Users</Link>
            <Link href="/extra">Admin</Link>
          </div>
          <div>Settings</div>
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </div>
  );
}
