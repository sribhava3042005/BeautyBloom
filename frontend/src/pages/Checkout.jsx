import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-pink-600 text-center mb-6">
          💳 Checkout
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <textarea
          placeholder="Address"
          className="w-full border p-3 rounded-lg mb-4"
        ></textarea>

        <input
          type="text"
          placeholder="City"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="text"
          placeholder="Pincode"
          className="w-full border p-3 rounded-lg mb-6"
        />

        <button
          onClick={() => navigate("/processing")}
          className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;