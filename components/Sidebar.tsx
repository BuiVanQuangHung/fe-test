"use client";
import { sideBarLink } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <section className="flex h-screen w-fit flex-col text-black max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sideBarLink.map((link) => {
          const isActive =
            pathName === link.route || pathName.startsWith(`${link.route}/`);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                { "bg-blue-600 text-white": isActive }
              )}
            >
              <p className="text-lg font-semibold">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
