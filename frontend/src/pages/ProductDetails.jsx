import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        const selectedProduct = res.data.find(
          (item) => item.id === Number(id)
        );

        setProduct(selectedProduct);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return (
      <h1 className="text-center text-3xl mt-10">
        Loading...
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 flex justify-center items-center p-8">
      <div className="bg-white rounded-xl shadow-lg p-8 w-[400px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover rounded-lg"
        />

        <h1 className="text-3xl font-bold mt-6">
          {product.name}
        </h1>

        <p className="text-pink-600 text-2xl font-bold mt-3">
          ₹{product.price}
        </p>

        <p className="text-gray-600 mt-2">
          Category: {product.category}
        </p>

        <p className="mt-4 text-gray-700">
          Premium beauty product with high-quality
          ingredients. Perfect for everyday use.
        </p>
        <p className="mt-4 text-black-700">
  {product.description}
</p>
<p className="text-yellow-500 text-lg mt-2">
  Rating: {product.rating}
</p>
<p className="bg-red-500 text-white inline-block px-3 py-1 rounded mt-3">
  {product.discount}
</p>
      </div>
    </div>
  );
}

export default ProductDetails;