import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "primary" | "secondary" | "accent" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      variant = "default",
      size = "default",
      ...props
    },
    ref
  ) => {
    const variantClass = {
      default: "input-bordered",
      primary: "input-primary",
      secondary: "input-secondary",
      accent: "input-accent",
      ghost: "input-ghost",
    }[variant];

    const sizeClass = {
      default: "",
      sm: "input-sm",
      lg: "input-lg",
    }[size];

    return (
      <input
        type={type}
        className={cn("input w-full", variantClass, sizeClass, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
