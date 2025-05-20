

export default function About() {
  return (
    <div className="bg-clay min-h-screen w-full px-6 py-20 font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-divina mb-8">
          About Us
        </h1>

        <p className="text-rosewood text-lg font-light leading-relaxed mb-6">
          <strong className="text-divina font-medium">Divina Jewellery</strong> is a newly established brand where elegance meets simplicity with a touch of inspiration.
          Our collections are inspired by the refined aesthetics of Italian style, blending timeless beauty with modern minimalism.
        </p>

        <p className="text-rosewood text-lg font-light leading-relaxed mb-6">
          The name <strong className="italic">“Divina”</strong> comes from the Italian word for “divine” or “perfect,” reflecting the essence we strive to embody in each of our designs.
          Every piece in our portfolio is crafted to celebrate subtle sophistication — effortlessly wearable, yet distinctly refined.
        </p>

        <p className="text-rosewood text-lg font-light leading-relaxed mb-12">
          Our mission is to bring a touch of brilliance to everyday moments and redefine the power of simplicity through elegant, meaningful jewellery.
        </p>

        {/* Contact Section */}
        <div className="border-t border-rosewood pt-8 mt-12">
          <h2 className="text-2xl font-serif text-divina mb-4">Contact</h2>
          <p className="text-rosewood text-md mb-2">
            <strong>Address:</strong> Abbasağa Mah. Yıldız Cad. Bekçi Sok. No:1
          </p>
          <p className="text-rosewood text-md">
            <strong>Phone:</strong> 0542 848 26 17
          </p>
        </div>
      </div>
    </div>
  );
}
