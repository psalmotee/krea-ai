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

interface MobileDrawerProps {
  id: string;
}

export default function MobileDrawer({ id }: MobileDrawerProps) {
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
          <li>
            <Link
              href="#"
              className="flex items-center gap-3 hover:bg-base-300 px-4 py-3 rounded-xl"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 hover:bg-base-300 px-4 py-3 rounded-xl">
              <Images className="h-4 w-4" />
              <span>Images</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 hover:bg-base-300 px-4 py-3 rounded-xl">
              <Video className="h-4 w-4" />
              <span>Video</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 hover:bg-base-300 px-4 py-3 rounded-xl">
              <Brush className="h-4 w-4" />
              <span>Brush</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 hover:bg-base-300 px-4 py-3 rounded-xl">
              <PaintBucket className="h-4 w-4" />
              <span>Paint</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 hover:bg-base-300 px-4 py-3 rounded-xl">
              <DraftingCompass className="h-4 w-4" />
              <span>Drafting</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 hover:bg-base-300 px-4 py-3 rounded-xl">
              <Folder className="h-4 w-4" />
              <span>Folder</span>
            </Link>
          </li>
        </ul>

        <div className="divider" />
        <ul>
          <li>
            <Link href="#" className="flex items-center gap-3 hover:bg-base-300 px-4 py-3 rounded-xl">
              <Images className="h-4 w-4" />
              <span>Gallery</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-3 hover:bg-base-300 px-4 py-3 rounded-xl">
              <Folder className="h-4 w-4" />
              <span>Projects</span>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}
