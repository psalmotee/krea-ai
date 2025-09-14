"use client";

import React from "react";
import {
  Search,
  Bell,
  User,
  Home,
  Images,
  Video,
  Brush,
  PaintBucket,
  DraftingCompass,
  Folder,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <header className="">
      <div className="container navbar mx-auto h-14 items-center px-4">
        {/* Logo */}
        <div className="navbar-start mr-4 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block text-base-content">
            K
          </span>
          <div className="h-4 w-4 rounded-full bg-gradient-to-br from-blue-200 to-purple-300" />
          <p className="flex justify-center items-center">
            kree AI
            <span className="text-xs text-base-content/60">
              <ChevronDown size={12} />
            </span>
          </p>
        </div>

        {/* Navigation */}
        <div className="navbar-center items-center text-sm font-medium bg-base-content/5 px-3 py-2 rounded-lg">
          <Link
            href="#"
            className="transition-colors hover:bg-base-100 px-2 py-1 rounded-lg flex justify-center items-center text-center text-base-content"
          >
            <Home className="h-4 w-4" />
          </Link>
          <Link
            href="#"
            className="transition-colors hover:bg-base-100 px-2 py-1 rounded-lg flex justify-center items-center text-center text-base-content"
          >
            <Images className="h-4 w-4 " />
          </Link>
          <Link
            href="#"
            className="transition-colors hover:bg-base-100 px-2 py-1 rounded-lg flex justify-center items-center text-center text-base-content"
          >
            <Video className="h-4 w-4 " />
          </Link>
          <Link
            href="#"
            className="transition-colors hover:bg-base-100 px-2 py-1 rounded-lg flex justify-center items-center text-center text-base-content"
          >
            <Brush className="h-4 w-4 " />
          </Link>
          <Link
            href="#"
            className="transition-colors hover:bg-base-100 px-2 py-1 rounded-lg flex justify-center items-center text-center text-base-content"
          >
            <PaintBucket className="h-4 w-4 " />
          </Link>
          <Link
            href="#"
            className="transition-colors hover:bg-base-100 px-2 py-1 rounded-lg flex justify-center items-center text-center text-base-content"
          >
            <DraftingCompass className="h-4 w-4 " />
          </Link>
          <Link
            href="#"
            className="transition-colors hover:bg-base-100 px-2 py-1 rounded-lg flex justify-center items-center text-center text-base-content"
          >
            <Folder className="h-4 w-4 " />
          </Link>
        </div>

        <div className="navbar-end lex items-center space-x-2">
          <Link
            href="#"
            className="transition-colors bg-base-content/5 hover:bg-base-100 px-2 py-1 rounded-lg flex justify-center items-center text-center text-base-content space-x-1"
          >
            <Images className="h-4 w-4 " />
            <span>Gallery</span>
          </Link>
          <Link
            href="#"
            className="transition-colors bg-base-content/5 hover:bg-base-100 px-2 py-1 rounded-lg flex justify-center items-center text-center text-base-content space-x-1"
          >
            <Folder className="h-4 w-4 " />
            <span>Projects</span>
          </Link>
          <button
            className="btn-ghost-custom bg-base-content/5 hover:bg-base-100 px-2 py-1 rounded-lg"
            title="Notifications"
          >
            <Bell className="h-4 w-4" />
          </button>
          <ThemeToggle />
          <div className="h-4 w-4 rounded-full bg-gradient-to-br from-blue-200 to-purple-300" />
        </div>
      </div>
    </header>
  );
}

export default Header;
