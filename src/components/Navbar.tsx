import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../pages/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, removeFromCart, clearCart } = useCart(); // Access cart actions

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <nav className="bg-clay shadow-md w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-divina text-amber-950 font-serif text-2xl font-semibold tracking-tight"
        >
          Divina
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLinks />
          {/* Shop Icon */}
          <button
            className="relative text-divina"
            onClick={toggleCart}
            aria-label="Toggle Cart"
          >
            <ShoppingCart size={28} />
            {/* Badge for cart items */}
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-divina"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col space-y-4">
            <NavLinks onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}

      {/* Cart Dropdown */}
      {isCartOpen && (
        <div className="absolute right-6 top-16 bg-white shadow-lg rounded-md p-4 w-64">
          <h3 className="text-lg font-semibold mb-2">Your Cart</h3>
          {cart.length > 0 ? (
            <>
              <ul className="space-y-2">
                {cart.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <div>
                      <span className="block text-sm font-medium">{item.name}</span>
                      <span className="block text-xs text-gray-500">{item.price}</span>
                    </div>
                    <button
                      onClick={() => removeFromCart(idx)} // Remove individual item
                      className="text-red-500 text-xs hover:underline"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={clearCart} // Clear all items
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Clear Cart
              </button>
            </>
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
          <button
            className="mt-4 w-full bg-divina text-white py-2 rounded-md"
            onClick={() => setIsCartOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </nav>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Link
        to="/"
        onClick={onClick}
        className="text-rosewood hover:text-divina transition-colors font-light"
      >
        Home
      </Link>
      <Link
        to="/shop"
        onClick={onClick}
        className="text-rosewood hover:text-divina transition-colors font-light"
      >
        Shop
      </Link>
      <Link
        to="/about"
        onClick={onClick}
        className="text-rosewood hover:text-divina transition-colors font-light"
      >
        About Us
      </Link>
    </>
  );
}