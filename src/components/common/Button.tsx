/**
 * Button component
 *
 * @returns JSX.Element
 */

import clsx from "clsx";

type Props = {
  children: any;
  onClick: () => void;
  primary?: boolean;
  size?: "m" | "xl";
};

export const Button = ({ children, onClick, primary }: Props) => {
  const class_name = clsx([
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "py-2.5",
    "px-5",
    "rounded-lg",
    primary ? "text-white" : "text-gray-900",
    "bg-gradient-to-br",
    primary ? "from-cyan-500" : "from-slate-50",
    primary ? "to-blue-500" : "from-slate-300",
    "border",
    primary ? "border-current" : "border-slate-600",
    "hover:opacity-65",
    "focus:ring-4",
    "focus:outline-none",
    "focus:ring-cyan-200",
  ]);

  return (
    <button className={class_name} onClick={onClick}>
      {children}
    </button>
  );
};
