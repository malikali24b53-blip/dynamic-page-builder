import { Phone, Mail, MapPin } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";

const ContactPage = () => (
  <div>
    {/* CTA Banner */}
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      <div className="absolute inset-0 bg-agro-overlay" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold italic text-primary-foreground mb-4">
          Looking for Reliable Agro Solutions?
        </h2>
        <p className="text-primary-foreground opacity-90 mb-8 max-w-xl mx-auto">
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
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-accent outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-accent outline-none"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-accent outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-accent outline-none resize-none"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:brightness-110 transition"
              >
                Send Message
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
                <p className="text-muted-foreground">+92 330 126567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground">Email</p>
                <p className="text-muted-foreground">info@anasagro.pk</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-foreground">Address</p>
                <p className="text-muted-foreground">Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ContactPage;
