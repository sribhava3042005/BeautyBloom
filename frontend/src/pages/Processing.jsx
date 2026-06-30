import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Processing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/order-confirmed");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-50">
      <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>

      <h1 className="text-3xl font-bold text-pink-600 mt-6">
        Processing Payment...
      </h1>

      <p className="text-gray-600 mt-2">
        Please wait while we confirm your order.
      </p>
    </div>
  );
}

export default Processing;