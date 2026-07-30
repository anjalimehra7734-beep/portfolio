import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">

      {/* Background Glow */}

      <div className="absolute -left-32 top-10 h-[350px] w-[350px] rounded-full bg-violet-600/20 blur-[150px]" />

      <div className="absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10">

        <div className="grid gap-16 lg:grid-cols-[1.3fr_.8fr_1fr]">

          <FooterBrand />

          <FooterLinks />

          <FooterSocial />

        </div>

        <Copyright />

      </div>

    </footer>
  );
}