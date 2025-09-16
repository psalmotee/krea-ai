"use client";

import React from "react";
import {
  Bell,
  Home,
  Images,
  Video,
  Brush,
  PaintBucket,
  DraftingCompass,
  Folder,
  Menu,
  ChevronDown,
} from "lucide-react";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import KreaLogo from "/public/image/Krea-logo-black.png";
import Image from "next/image";
import MobileDrawer from "./ui/MobileDrawer";

function Header() {

  const navLinks = [
    { href: "#", icon: <Home />, label: "Home" },
    { href: "#", icon: <Images />, label: "Images" },
    { href: "#", icon: <Video />, label: "Video" },
    { href: "#", icon: <Brush />, label: "Brush" },
    { href: "#", icon: <PaintBucket />, label: "PaintBucket" },
    { href: "#", icon: <DraftingCompass />, label: "DraftingCompass" },
    { href: "#", icon: <Folder />, label: "Folder" },
  ];
  const drawerId = "header-drawer";
  return (
    <header className="fixed top-0 z-50 w-full bg-white/40 backdrop-blur-2xl">
      <div className="drawer drawer-start">
        <MobileDrawer id={drawerId} />
        <input id={drawerId} type="checkbox" className="drawer-toggle" />

        {/* MAIN NAVBAR */}
        <div className="drawer-content">
          <div className="navbar mx-auto h-14 items-center px-4 sm:px-8">

            {/* Left: hamburger (mobile), logo, dot, title */}
            <div className="navbar-start mr-4 flex items-center space-x-2">

              {/* hamburger */}
              <label
                htmlFor={drawerId}
                className="btn btn-ghost p-1 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </label>

              {/* logo */}
              <span className="hidden sm:inline-block font-bold text-base-content">
                <Image src={KreaLogo} alt="Krea AI" width={16} height={16} />
              </span>
              <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-blue-200 to-purple-300" />
              <div className="flex items-center space-x-1">
                <span className="text-sm leading-none">krea AI</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {/* Center nav */}
            <div className="navbar-center hidden sm:flex bg-gray-300 h-12 rounded-xl">
              <ul className="menu menu-horizontal px-1 gap-1">
                {navLinks.map((navLink) => (
                  <li key={navLink.label}>
                    <Link
                      href={navLink.href}
                      className="transition-colors hover:bg-base-100 px-4 py-3 rounded-xl flex justify-center items-center text-base-content"
                    >
                      {React.cloneElement(navLink.icon, {
                        className: "h-4 w-4",
                      })}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side */}
            <div className="navbar-end flex items-center space-x-2">
              <div className="hidden lg:flex items-center gap-2">
                <Link
                  href="#"
                  className="transition-colors bg-base-200 hover:bg-base-300 px-2 py-1 rounded-xl flex items-center text-base-content space-x-1"
                >
                  <Images className="h-4 w-4" />
                  <span className="text-sm">Gallery</span>
                </Link>
                <Link
                  href="#"
                  className="transition-colors bg-base-200 hover:bg-base-300 px-2 py-1 rounded-xl flex items-center text-base-content space-x-1"
                >
                  <Folder className="h-4 w-4" />
                  <span className="text-sm">Projects</span>
                </Link>
              </div>
              <Link
                href={"#"}
                className="transition-colors bg-base-200 hover:bg-base-300 px-2.5 py-1.5 rounded-xl"
                title="Notifications"
                aria-label="Notifications"
              >
                <Bell className="h-4 w-4" />
              </Link>
              <ThemeToggle />
              <div className="h-4 w-4 rounded-full bg-gradient-to-br from-blue-200 to-purple-300" />
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <MobileDrawer id={drawerId} />
      </div>
    </header>
  );
}

export default Header;
