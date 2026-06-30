import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="text-center px-6">
       
       <TypeAnimation
  sequence={[
    "Welcome to Beauty Store ",
    2000,
    "",
    500,
  ]}
  wrapper="h1"
  speed={50}
  repeat={Infinity}
  className="text-6xl font-bold text-pink-500 pt-5 pb-3"
/>
        
        <img
  src="/images/beauty banner.avif"
  alt="Lipstick"
  className="w-400 h- [400px] object-cover"
/>

        <p className="text-black-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto pt-2">
          Welcome to Beauty Store, where beauty meets confidence. Explore our exclusive collection
  of premium lipsticks, foundations, face washes, and skincare products from leading brands.
  
        </p>

        <button
          onClick={() => navigate("/products")}
          className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300 shadow-lg"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Home;