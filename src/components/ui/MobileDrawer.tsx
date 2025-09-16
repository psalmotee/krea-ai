"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Images,
  Video,
  Brush,
  PaintBucket,
  DraftingCompass,
  Folder,
  X,
} from "lucide-react";
import KreaLogo from "/public/image/Krea-logo-black.png";
import { usePathname } from "next/navigation";

interface MobileDrawerProps {
  id: string;
}

function MobileDrawer({ id }: MobileDrawerProps) {
  const pathname = usePathname();
  
  const navLinks = [
    { href: "/", icon: <Home />, label: "Home" },
    { href: "#", icon: <Images />, label: "Images" },
    { href: "#", icon: <Video />, label: "Video" },
      { href: "#", icon: <Brush />, label: "Brush" },
      { href: "#", icon: <PaintBucket />, label: "PaintBucket" },
      { href: "#", icon: <DraftingCompass />, label: "DraftingCompass" },
      { href: "#", icon: <Folder />, label: "Folder" },
    ];
  return (
    <div className="drawer-side lg:hidden">
      <label htmlFor={id} className="drawer-overlay" />
      <aside className="w-72 bg-base-200 min-h-full p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src={KreaLogo} alt="Krea AI" width={20} height={20} />
            <div>
              <p className="text-sm font-semibold">krea AI</p>
            </div>
          </div>

          {/* small close button */}
          <label htmlFor={id} className="btn btn-ghost btn-sm">
            <X className="h-4 w-4" />
          </label>
        </div>

        <ul>
          {navLinks.map((navLink) => {
            const isActive = pathname === navLink.href;
            return (
              <li key={navLink.label}>
                <Link
                  href={navLink.href}
                  className={`flex items-center gap-3 hover:bg-base-300 px-4 py-3 rounded-xl ${
                    isActive
                      ? "bg-base-100 font-semibold shadow-md"
                      : "hover:bg-base-100"
                  }`}
                >
                  {React.cloneElement(navLink.icon, {
                    className: "h-4 w-4",
                  })}
                  <span>{navLink.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="divider" />

        {/* Additional Links */}
        <ul>
          <li>
            <Link
              href="#"
              className="flex items-center gap-3 hover:bg-base-300 px-4 py-3 rounded-xl"
            >
              <Images className="h-4 w-4" />
              <span>Gallery</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-3 hover:bg-base-300 px-4 py-3 rounded-xl"
            >
              <Folder className="h-4 w-4" />
              <span>Projects</span>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default MobileDrawer;
