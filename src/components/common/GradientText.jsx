export default function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
      {children}
    </span>
  );
}