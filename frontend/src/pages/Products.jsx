import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Products({
  cart,
  setCart,
  wishlist,
  setWishlist,
}) {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  const addToWishlist = (product) => {
    const alreadyExists = wishlist.find(
      (item) => item.id === product.id
    );

    if (alreadyExists) {
      alert("Product already in wishlist");
      return;
    }

    setWishlist([...wishlist, product]);
    alert(`${product.name} added to wishlist`);
  };

  return (
    <div className="min-h-screen bg-pink-50 p-8">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
        Beauty Products
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="🔍 Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 p-3 rounded-lg border border-pink-300 outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <button
          onClick={() => setSelectedCategory("All")}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
        >
          All
        </button>

        <button
          onClick={() => setSelectedCategory("Lipstick")}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
        >
          Lipstick
        </button>

        <button
          onClick={() => setSelectedCategory("Foundation")}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
        >
          Foundation
        </button>

        <button
          onClick={() => setSelectedCategory("Face Wash")}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
        >
          Face Wash
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products
          .filter(
            (product) =>
              (selectedCategory === "All" ||
                product.category === selectedCategory) &&
              product.name
                .toLowerCase()
                .includes(search.toLowerCase())
          )
          .map((product) => (
            <div
              key={product.id}
              onClick={() =>
                navigate(`/product/${product.id}`)
              }
              className="bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition duration-300 cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-lg"
              />

              <h2 className="text-xl font-bold mt-4">
                {product.name}
              </h2>

              <p className="text-pink-600 font-bold text-lg mt-2">
                ₹{product.price}
              </p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700"
                >
                  🛒 Add
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToWishlist(product);
                  }}
                  className="bg-black-100 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  ❤️
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;