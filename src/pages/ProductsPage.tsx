import { useState } from "react";
import { X } from "lucide-react";
import cornCutter from "@/assets/corn-cutter.png";
import cornCutterDetail from "@/assets/product-corn-cutter-detail.jpg";
import productTractor from "@/assets/product-tractor.jpg";

const products = [
  {
    title: "Corn Cutter / Reaper Machine",
    desc: "High-performance corn cutter reaper used across Pakistan for efficient crop cutting and harvesting.",
    img: cornCutter,
    detailImg: cornCutterDetail,
    details: {
      heading: "Corn Cutter / Reaper Machine",
      features: [
        "Efficiently cuts corn, wheat, rice and other standing crops",
        "Compact walking-type design, easy to operate in small and large fields",
        "Reduces harvesting time by up to 70% compared to manual cutting",
        "Low fuel consumption with powerful petrol/diesel engine",
        "Adjustable cutting height for different crop types",
        "Lightweight and portable — easy to transport between fields",
        "Minimal maintenance required, durable build for Pakistani conditions",
        "One operator can harvest 4-6 acres per day"
      ],
      howItWorks: "The reaper machine uses a series of sharp reciprocating blades at the front to cut standing crops at the base. As the operator walks behind and guides the machine through the field, the cut crops are neatly laid to one side in a row for easy collection. The machine is powered by a small engine and can be adjusted for different crop heights and field conditions."
    }
  },
  {
    title: "Red Cutter Reaper",
    desc: "Powerful red cutter reaper machine for large-scale crop harvesting with high efficiency.",
    img: cornCutterDetail,
    detailImg: cornCutterDetail,
    details: {
      heading: "Red Cutter Reaper Machine",
      features: [
        "Heavy-duty construction for continuous farm use",
        "Wide cutting bar for faster field coverage",
        "Suitable for wheat, corn, rice, and fodder crops",
        "Self-propelled design for ease of operation",
        "Fuel-efficient engine with long-lasting performance",
        "Perfect for medium to large-scale farming operations",
        "Easy blade replacement and servicing",
        "Saves labor costs significantly compared to manual harvesting"
      ],
      howItWorks: "This red cutter reaper is designed for heavy-duty crop harvesting. The front-mounted cutting bar moves in a rapid back-and-forth motion to slice through crop stems cleanly. The machine's self-propelled mechanism allows a single operator to cover large fields efficiently, while the cut crops are deposited in neat rows for drying and collection."
    }
  },
  {
    title: "Compact Tractor",
    desc: "Powerful yet compact tractors designed for modern farming operations.",
    img: productTractor,
    detailImg: productTractor,
    details: {
      heading: "Compact Tractor",
      features: [
        "Versatile multi-purpose farming tractor",
        "Powerful engine suitable for plowing, tilling, and hauling",
        "Compact size for navigating narrow field paths",
        "Comfortable operator seating with easy controls",
        "Compatible with various farming attachments",
        "Fuel efficient for daily farm operations"
      ],
      howItWorks: "The compact tractor is a versatile farming vehicle that can be fitted with various attachments including plows, cultivators, trailers and more. Its powerful engine and compact frame make it ideal for both field work and transportation of agricultural goods."
    }
  },
];

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold italic text-foreground">
            ✦ Featured Products ✦
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border"
            >
              <div className="h-56 overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                <button
                  onClick={() => setSelectedProduct(p)}
                  className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:bg-agro-green transition"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <div
            className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <div className="flex justify-end p-4 pb-0">
              <button onClick={() => setSelectedProduct(null)} className="text-muted-foreground hover:text-foreground transition">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Image */}
            <div className="px-6">
              <div className="rounded-xl overflow-hidden bg-white">
                <img src={selectedProduct.detailImg} alt={selectedProduct.details.heading} className="w-full h-64 sm:h-80 object-contain" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="font-heading text-2xl font-bold text-foreground">{selectedProduct.details.heading}</h3>
              
              <div>
                <h4 className="font-heading font-bold text-lg text-accent mb-2">کیسے کام کرتی ہے؟ (How It Works)</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{selectedProduct.details.howItWorks}</p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-lg text-accent mb-2">خصوصیات اور فوائد (Features & Benefits)</h4>
                <ul className="space-y-2">
                  {selectedProduct.details.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-0.5">✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/923447542097"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#1ebe57] transition mt-4"
              >
                📞 WhatsApp پر رابطہ کریں
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
