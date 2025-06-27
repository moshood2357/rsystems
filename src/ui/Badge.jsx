import React from "react";

// Simple utility to merge class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const variantClasses = {
  default: "border-transparent bg-blue-600 text-white hover:bg-blue-700",
  secondary: "border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200",
  destructive: "border-transparent bg-red-600 text-white hover:bg-red-700",
  outline: "text-gray-800 border border-gray-300",
};

export function Badge({ className = "", variant = "default", ...props }) {
  const baseClasses =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  return (
    <div
      className={cn(baseClasses, variantClasses[variant] || variantClasses.default, className)}
      {...props}
    >
      {props.children}
    </div>
  );
}
