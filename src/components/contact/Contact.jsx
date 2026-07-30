import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[#050816]" />

      <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[160px]" />

      <div className="absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        <ContactHeader />

        <div className="mt-20 grid gap-14 lg:grid-cols-[1fr_1.2fr]">

          <ContactInfo />

          <ContactForm />

        </div>

      </div>
    </section>
  );
}