"use client";

import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "dot" | "carouselBtn" | "themeBtn";
  className?: string;
}

function Button({
  children,
  onClick,
  ariaLabel,
  type = "button",
  variant = "primary",
  className,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full transition";

  const variantStyles = {
    primary:
      "bg-base-100 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-base-content shadow-md hover:brightness-75",
    secondary:
      "ml-4 text-xs px-2 py-1 font-medium bg-base-content/5 text-base-content shadow-md hover:bg-base-content/10",
    carouselBtn:
      "bg-base-content/40 text-base-100 hover:bg-base-content/50 p-1",
   themeBtn: "bg-base-200 hover:bg-base-300 px-2 py-1 rounded-xl",
    dot: "h-2 w-2 rounded-full",
  };

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      className={clsx(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </button>
  );
}

export default Button;