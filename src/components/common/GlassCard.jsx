export default function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(124,58,237,.15)] ${className}`}
    >
      {children}
    </div>
  );
}