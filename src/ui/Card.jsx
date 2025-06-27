import React from "react";

// Simple class name combiner (replacement for `cn`)
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Card = React.forwardRef(function Card({ className = "", ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-white text-gray-900 shadow-sm", className)}
      {...props}
    />
  );
});

const CardHeader = React.forwardRef(function CardHeader({ className = "", ...props }, ref) {
  return (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  );
});

const CardTitle = React.forwardRef(function CardTitle({ className = "", ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  );
});

const CardDescription = React.forwardRef(function CardDescription({ className = "", ...props }, ref) {
  return (
    <div ref={ref} className={cn("text-sm text-gray-500", className)} {...props} />
  );
});

const CardContent = React.forwardRef(function CardContent({ className = "", ...props }, ref) {
  return <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
});

const CardFooter = React.forwardRef(function CardFooter({ className = "", ...props }, ref) {
  return <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />;
});

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
