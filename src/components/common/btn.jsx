import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  return (
    <button
      className={clsx(
        "rounded-full px-7 py-3 transition-all duration-300 font-medium",
        variant === "primary"
          ? "bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white hover:scale-105"
          : "border border-white/10 bg-white/5 text-white hover:bg-white/10",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}