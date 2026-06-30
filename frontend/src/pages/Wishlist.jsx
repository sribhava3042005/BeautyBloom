function Wishlist({ wishlist, setWishlist }) {
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <h3 className="text-gray-500 text-lg">No Products in Wishlist</h3>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition w-64"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg"
              />

              <h3 className="mt-3 text-lg font-semibold">
                {item.name}
              </h3>

              <p className="text-gray-700 font-medium">
                ₹{item.price}
              </p>

              <button
                onClick={() => removeFromWishlist(item.id)}
                className="mt-3 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
              >
                🗑️ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;