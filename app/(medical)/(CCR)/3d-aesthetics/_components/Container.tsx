import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div
      className={`custom-container eurol-root  mx-auto px-6 md:px-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
