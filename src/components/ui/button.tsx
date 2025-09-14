import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "accent" | "ghost" | "link" | "outline";
  size?: "default" | "sm" | "lg";
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      loading,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? "span" : "button"; 

    const variantClass = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      ghost: "btn-ghost",
      link: "btn-link",
      outline: "btn-outline",
    }[variant];

    const sizeClass = {
      default: "",
      sm: "btn-sm",
      lg: "btn-lg",
    }[size];

    return (
      <Comp
        ref={ref}
        className={cn(
          "btn",
          variantClass,
          sizeClass,
          loading && "loading",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
