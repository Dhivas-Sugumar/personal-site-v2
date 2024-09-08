import React from "react";

interface BadgeProps {
  label: string;
  variant?: "default" | "small";
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = "default" }) => {
  return (
    <div
      className={`rounded-full bg-gradient-to-r from-primary200 to-tertiary100 border-2 border-accent300 p-2`}
    >
      <p className="text-center text-accent300">{label}</p>
    </div>
  );
};
