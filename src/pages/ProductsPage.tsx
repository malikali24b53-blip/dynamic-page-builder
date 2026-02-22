import productSeeds from "@/assets/product-seeds.jpg";
import productIrrigation from "@/assets/product-irrigation.jpg";
import productTractor from "@/assets/product-tractor.jpg";

const products = [
  {
    title: "Hybrid Seeds",
    desc: "Premium quality hybrid seeds for maximum crop yield and disease resistance.",
    img: productSeeds,
  },
  {
    title: "Drip Irrigation System",
    desc: "Advanced drip irrigation technology for efficient water management in farms.",
    img: productIrrigation,
  },
  {
    title: "Compact Tractor",
    desc: "Powerful yet compact tractors designed for modern farming operations.",
    img: productTractor,
  },
];

const ProductsPage = () => (
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
            <div className="h-56 overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <button className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:bg-agro-green transition">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsPage;
