"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

// 🔹 ToolCard built directly into Card system
interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  badge?: string;
  buttonText: string;
  iconBg: string;
}

function ToolCard({
  title,
  description,
  icon,
  badge,
  buttonText,
  iconBg,
}: ToolCardProps) {
  return (
    <Card className="relative overflow-hidden rounded-xl border border-base-300 bg-base-100 p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group">
      <CardHeader className="flex items-start justify-between p-0">
        {/* Left: Icon + text */}
        <div className="flex items-center space-x-3">
          <div
            className={`h-10 w-10 rounded-lg flex items-center justify-center ${iconBg}`}
          >
            <span className="text-lg">{icon}</span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <CardTitle className="font-semibold text-base-content">
                {title}
              </CardTitle>
              {badge && (
                <span className="badge badge-secondary h-5 px-2 text-xs">
                  {badge}
                </span>
              )}
            </div>
            <CardDescription className="text-sm text-base-content/60">
              {description}
            </CardDescription>
          </div>
        </div>

        {/* Right: Button */}
        <CardAction>
          <button className="btn btn-ghost btn-sm text-base-content/60 hover:text-base-content">
            {buttonText}
          </button>
        </CardAction>
      </CardHeader>
    </Card>
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  ToolCard,
};
