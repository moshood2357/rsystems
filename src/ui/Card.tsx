import { forwardRef, HTMLAttributes } from "react";

// Simple class name combiner
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// Define props for card components
interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className = "", ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-white text-gray-900 shadow-sm", className)}
      {...props}
    />
  );
});

const CardHeader = forwardRef<HTMLDivElement, CardProps>(function CardHeader(
  { className = "", ...props },
  ref
) {
  return (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  );
});

const CardTitle = forwardRef<HTMLDivElement, CardProps>(function CardTitle(
  { className = "", ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  );
});

const CardDescription = forwardRef<HTMLDivElement, CardProps>(function CardDescription(
  { className = "", ...props },
  ref
) {
  return (
    <div ref={ref} className={cn("text-sm text-gray-500", className)} {...props} />
  );
});

const CardContent = forwardRef<HTMLDivElement, CardProps>(function CardContent(
  { className = "", ...props },
  ref
) {
  return <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
});

const CardFooter = forwardRef<HTMLDivElement, CardProps>(function CardFooter(
  { className = "", ...props },
  ref
) {
  return <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />;
});

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
