import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter(
      (_, index) => index !== indexToRemove
    );

    setCart(updatedCart);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-pink-50 p-8">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
        🛒 My Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-xl text-gray-500">
          Your Cart is Empty 🛍️
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-5"
              >
                <h2 className="text-xl font-bold">
                  {item.name}
                </h2>

                <p className="text-pink-600 text-lg font-semibold mt-2">
                  ₹{item.price}
                </p>

                <button
                  onClick={() => removeFromCart(index)}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">
              Total: ₹{totalPrice}
            </h2>

            <button
              onClick={() => navigate("/checkout")}
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg"
            >
              💳 Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;