import serviceSupplies from "@/assets/service-supplies.jpg";
import serviceMachinery from "@/assets/service-machinery.jpg";
import serviceIrrigation from "@/assets/service-irrigation.jpg";
import serviceAdvisory from "@/assets/service-advisory.jpg";

const WHATSAPP_LINK = "https://wa.me/923466539820";

const services = [
  {
    title: "Agricultural Supplies",
    desc: "Experience complete farm solutions, from quality seeds to premium fertilizers and essential farming tools.",
    img: serviceSupplies,
  },
  {
    title: "Farm Machinery Support",
    desc: "Expert machinery support and maintenance services to keep your farming equipment running efficiently.",
    img: serviceMachinery,
  },
  {
    title: "Irrigation Solutions",
    desc: "Modern drip and sprinkler irrigation systems designed to maximize water efficiency and crop yield.",
    img: serviceIrrigation,
  },
  {
    title: "Crop Advisory",
    desc: "Professional crop consulting services to help you make informed decisions for sustainable growth.",
    img: serviceAdvisory,
  },
];

const ServicesPage = () => (
  <section className="py-16 bg-agro-wheat">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Why Choose <span className="italic text-accent">Anas Agro Services?</span>
        </h2>
        <div className="section-divider mt-4" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#1ebe57] transition"
              >
                📞 WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPage;
