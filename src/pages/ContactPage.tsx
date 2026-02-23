import { Phone, Mail, MapPin } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";

const WHATSAPP_LINK = "https://wa.me/923466539820";

const ContactPage = () => (
  <div>
    {/* CTA Banner */}
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      <div className="absolute inset-0 bg-agro-overlay" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold italic text-white mb-4">
          Looking for Reliable Agro Solutions?
        </h2>
        <p className="text-white opacity-90 mb-8 max-w-xl mx-auto">
          Partner with Anas Agro Services for top-quality agricultural support
        </p>
      </div>
    </section>

    {/* Contact Form + Info */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
              const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
              const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value || '';
              const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';
              const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
              window.open(`https://wa.me/923466539820?text=${text}`, '_blank');
            }}>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-accent outline-none"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-accent outline-none"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-accent outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-accent outline-none resize-none"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1ebe57] transition flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="font-heading text-2xl font-bold text-foreground">Contact Info</h3>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground">Phone</p>
                <p className="text-muted-foreground">0346 6539820</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground">Email</p>
                <p className="text-muted-foreground">malikanas24b274@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground">Address</p>
                <p className="text-muted-foreground">Punjab, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ContactPage;
