import { motion } from "framer-motion";
import { useState } from "react";
import { useCart } from "../pages/CartContext"; // Import useCart

const bestSellers = [
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
  {
    name: "Italian Bracelet",
    price: "579.99 EUR",
    image: "/images/italian.png",
    details: "Gold, Yellow 14 Carat, 8.80 gr",
  },
];

const newArrivals = [
  {
    name: "White Gold Baguette Ring",
    price: "144.99 EUR",
    image: "/images/white.png",
    details: "Gold, White 14K, 3.40 gr",
  },
  {
    name: "Waterway Bracelet",
    price: "344.99 EUR",
    image: "/images/water.png",
    details: "Gold, White 14K, 7.24 gr",
  },
  {
    name: "3 Rows of Rings",
    price: "249.99 EUR",
    image: "/images/row3.png",
    details: "Gold, Rose 14 Carat, 4.64 gr",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"Best Sellers" | "New Arrivals">("Best Sellers");
  const { addToCart } = useCart(); // Access addToCart from CartContext

  return (
    <div className="bg-clay min-h-screen w-full px-6 py-16 font-sans">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-14"
      >
        <img src="/images/logo.png" className="w-32 h-32 rounded-sm mx-auto block mb-4" alt="Divina logo" />

        <h1 className="text-5xl md:text-6xl text-amber-950 font-serif text-divina mb-4 tracking-tight">
          Divina Jewellery
        </h1>
        <p className="text-rosewood text-lg md:text-xl font-light max-w-xl mx-auto">
          Where timeless elegance meets modern minimalism.<br />
          Every piece tells a story — crafted with inspiration, designed with purpose.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center mb-10"
      >
        <p className="text-md text-rosewood font-light">
          Discover the pieces our community loves most — worn with grace, made for the divine in you.
        </p>
      </motion.div>

      {/* Tab Buttons */}
      <div className="flex justify-center gap-6 mb-10">
        {["Best Sellers", "New Arrivals"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "Best Sellers" | "New Arrivals")}
            className={`px-4 py-2 border-b-2 font-light transition-all ${activeTab === tab
              ? "border-divina text-divina"
              : "border-transparent text-rosewood hover:text-divina"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {(activeTab === "Best Sellers" ? bestSellers : newArrivals).map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-lg w-full h-60 object-cover mb-4"
            />
            <p className="text-red-500 text-sm mb-1">{item.details}</p>
            <h3 className="text-lg font-semibold text-divina font-serif">{item.name}</h3>
            <p className="text-rosewood">{item.price}</p>
            <button
              onClick={() => addToCart(item)} // Add item to cart
              className="mt-4 px-4 py-2 border border-divina text-divina font-light rounded bg-white transition-colors duration-200 hover:bg-amber-500 hover:text-white hover:border-amber-500"
              style={{
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-20 px-4">
        <p className="text-divina italic text-md leading-relaxed">
          “Elegance is when the inside is as beautiful as the outside.”
          <br />
          <span className="text-rosewood text-sm">
            At Divina, we craft more than jewellery — we craft emotion, confidence, and memory.
          </span>
        </p>

        <div className="flex items-center">
      <img
        src="https://gunisigikitapligi.com/wp-content/uploads/2025/04/david-almond.jpg" // Öneri: profil fotoğrafı ekle veya placeholder kullan (örneğin: https://i.pravatar.cc/40)
        alt="David Hoke"
        className="w-10 h-10 rounded-full mr-3"
      />
      <div>
        <p className="text-gray-900 font-semibold">David Hoke</p>
        <p className="text-gray-500 text-sm">Verified Buyer</p>
      </div>
    </div>
  </div>
</div>
<div className="mt-20 px-6 max-w-3xl mx-auto">
  <h2 className="text-2xl font-serif text-divina mb-6 text-center">
    Why Shop with Divina?
  </h2>

  <div className="space-y-6">
    {/* Certified Products */}
    <div className="flex items-start space-x-4">
      <ShieldCheck className="text-emerald-600 w-6 h-6 mt-1" />
      <div>
        <p className="font-semibold text-divina text-lg">Certified Products You Can Trust</p>
        <p className="text-rosewood text-sm">
          All our items come with official certification for authenticity and quality.
        </p>
      </div>
    </div>
    <hr />

    {/* Free Shipping */}
    <div className="flex items-start space-x-4">
      <Truck className="text-emerald-600 w-6 h-6 mt-1" />
      <div>
        <p className="font-semibold text-divina text-lg">Free & Insured Shipping</p>
        <p className="text-rosewood text-sm">
          We deliver your orders with free and insured shipping for peace of mind.
        </p>
      </div>
    </div>
    <hr />

    {/* Easy Return */}
    <div className="flex items-start space-x-4">
      <RefreshCcw className="text-emerald-600 w-6 h-6 mt-1" />
      <div>
        <p className="font-semibold text-divina text-lg">Easy Return & Exchange Guarantee</p>
        <p className="text-rosewood text-sm">
          Enjoy hassle-free returns or exchanges within 14 days of your purchase.
        </p>
      </div>
    </div>
  </div>
</div>
        
      
      </div>
    </div>
  );
}