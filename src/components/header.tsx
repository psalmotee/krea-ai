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
import KreaLogo from "/public/image/Krea-logo-black.png";
import Image from "next/image";

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-base-100/40 backdrop-blur-2xl">
      <div className=" navbar mx-auto h-14 items-center px-8">
        <div className="navbar-start mr-4 flex items-center space-x-2">
          <span className="hidden sm:inline-block font-bold text-base-content">
            <Image src={KreaLogo} alt="Krea AI" width={16} height={16} />
          </span>
          <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-blue-200 to-purple-300"></div>
          <div className="flex items-center space-x-1">
            <span className="text-sm leading-none">krea AI Generator</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Navigation */}
        <div className="navbar-center items-center bg-base-300 h-12 rounded-xl">
          <ul className="menu menu-horizontal">
            <li>
              <Link
                href="#"
                className="transition-colors hover:bg-base-100 px-4 py-3 rounded-xl flex justify-center items-center text-center text-base-content"
              >
                <Home className="h-4 w-4" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition-colors hover:bg-base-100 px-4 py-3 rounded-xl flex justify-center items-center text-center text-base-content"
              >
                <Images className="h-4 w-4 " />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition-colors hover:bg-base-100 px-4 py-3 rounded-xl flex justify-center items-center text-center text-base-content"
              >
                <Video className="h-4 w-4 " />
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="#"
                className="transition-colors hover:bg-base-100 px-4 py-3 rounded-xl flex justify-center items-center text-center text-base-content"
              >
                <Brush className="h-4 w-4 " />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition-colors hover:bg-base-100 px-4 py-3 rounded-xl flex justify-center items-center text-center text-base-content"
              >
                <PaintBucket className="h-4 w-4 " />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition-colors hover:bg-base-100 px-4 py-3 rounded-xl flex justify-center items-center text-center text-base-content"
              >
                <DraftingCompass className="h-4 w-4 " />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition-colors hover:bg-base-100 px-4 py-3 rounded-xl flex justify-center items-center text-center text-base-content"
              >
                <Folder className="h-4 w-4 " />
              </Link>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="navbar-end flex items-center space-x-2">
          <Link
            href="#"
            className="transition-colors bg-base-200 hover:bg-base-300 px-2 py-1 rounded-xl flex justify-center items-center text-center text-base-content space-x-1"
          >
            <Images className="h-4 w-4 " />
            <span>Gallery</span>
          </Link>
          <Link
            href="#"
            className="transition-colors bg-base-200 hover:bg-base-300 px-2 py-1 rounded-xl flex justify-center items-center text-center text-base-content space-x-1"
          >
            <Folder className="h-4 w-4 " />
            <span>Projects</span>
          </Link>
          <button
            className="btn-ghost-custom bg-base-200 hover:bg-base-300 px-2.5 py-1.5 rounded-xl"
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
