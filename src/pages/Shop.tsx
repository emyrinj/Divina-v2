import { useState } from "react";
import { useCart } from "../pages/CartContext";

const categories = {
  Rings: [
    {
      name: "White Gold Baguette Ring",
      price: "144.99 EUR",
      image: "/images/white.png",
      details: "Gold, White 14K, 3.40 gr",
    },
    {
      name: "3 Rows of Rings",
      price: "249.99 EUR",
      image: "/images/row3.png",
      details: "Gold, Rose 14 Carat, 4.64 gr",
    },
  ],
  Bracelets: [
    {
      name: "Italian Bracelet",
      price: "579.99 EUR",
      image: "/images/italian.png",
      details: "Gold, Yellow 14 Carat, 8.80 gr",
    },
    {
      name: "Waterway Bracelet",
      price: "344.99 EUR",
      image: "/images/water.png",
      details: "Gold, White 14K, 7.24 gr",
    },
  ],
  Necklaces: [
    {
      name: "Eye Necklace",
      price: "184.99 EUR",
      image: "/images/eye.png",
      details: "Gold, Yellow 14K, 2.17 gr",
    },
    {
      name: "Stone Star Necklace",
      price: "159.99 EUR",
      image: "/images/star.png",
      details: "Gold, Yellow 14K, 2.21 gr",
    },
  ],
};

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof categories>("Rings");
  const { addToCart } = useCart();

  return (
    <div className="bg-clay min-h-screen w-full px-6 py-12 font-sans">
      <h1 className="text-4xl font-serif text-divina text-center mb-8">Shop</h1>

      <div className="flex justify-center gap-6 mb-10">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as keyof typeof categories)}
            className={`px-4 py-2 border-b-2 font-light transition-all ${activeCategory === cat
                ? "border-divina text-divina"
                : "border-transparent text-rosewood hover:text-divina"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories[activeCategory].map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg w-full h-60 object-cover mb-4"
            />
            <p className="text-red-500 text-sm mb-1">{product.details}</p>
            <h3 className="text-lg font-serif font-semibold text-divina">{product.name}</h3>
            <p className="text-rosewood mb-3">{product.price}</p>
            <button
              onClick={() => addToCart(product)} // Add item to cart
              className="mt-4 px-4 py-2 border border-divina text-divina font-light rounded bg-white transition-colors duration-200 hover:bg-amber-500 hover:text-white hover:border-amber-500"
              style={{
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}