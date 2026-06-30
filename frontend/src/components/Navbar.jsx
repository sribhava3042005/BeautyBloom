import { Link } from "react-router-dom";

function Navbar({ cart, wishlist }) {
  return (
    <nav className="bg-pink-600 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">
        💄 Beauty Store
      </h1>

      <div className="flex gap-6 text-lg">
        <Link
          to="/"
          className="hover:text-pink-200 transition"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="hover:text-pink-200 transition"
        >
          Products
        </Link>

        <Link
          to="/cart"
          className="hover:text-pink-200 transition"
        >
          🛒 Cart ({cart.length})
        </Link>

        <Link
          to="/wishlist"
          className="hover:text-pink-200 transition"
        >
          ❤️ Wishlist ({wishlist.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;