import { useNavigate } from "react-router-dom";

function OrderConfirmed() {
  const navigate = useNavigate();

  const orderId = Math.floor(
    100000 + Math.random() * 900000
  );

  return (
    <div className="min-h-screen bg-pink-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center w-[400px]">
        <h1 className="text-6xl mb-4">✅</h1>

        <h2 className="text-3xl font-bold text-green-600 mb-3">
          Order Confirmed!
        </h2>

        <p className="text-gray-600 mb-2">
          Thank you for shopping with us.
        </p>

        <p className="text-lg font-semibold mb-2">
          Order ID: #{orderId}
        </p>

        <p className="text-gray-500 mb-6">
          Estimated Delivery: 3 - 5 Days 🚚
        </p>

        <button
          onClick={() => navigate("/products")}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmed;