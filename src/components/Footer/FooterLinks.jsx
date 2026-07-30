import { footerLinks } from "@/data/footerLinks";

export default function FooterLinks() {
  return (
    <div>
      <h3 className="mb-6 text-xl font-semibold text-white">
        Quick Links
      </h3>

      <ul className="space-y-3">
        {footerLinks.map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
              className="text-zinc-400 transition hover:text-cyan-400"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}