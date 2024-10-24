import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchProducts, addToCart } from "@/store/slice/cartSlice";
import Image from "next/image";
import { toast } from "react-toastify";
import { motion } from "framer-motion"; // Import motion

const Spinner = () => (
  <div className="flex items-center justify-center w-full h-96">
    <div className="w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
  </div>
);

const ErrorComponent = ({ errorMessage }) => (
  <div className="col-span-4 text-center text-red-500">
    <p>Error loading products: {errorMessage}</p>
  </div>
);

const ProductItem = ({ product, handleAddToCart }) => (
  <motion.div
    key={product.id}
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    whileHover={{ scale: 1.05 }}  
    transition={{ duration: 0.3 }}
    className="flex flex-col text-white bg-black rounded-md"
  >
    <Image
      src={product.images[0]}
      width={500}
      height={500}
      alt={product.title}
      className="w-full aspect-square rounded-t-md"
    />
    <div className="p-4">
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <button
        onClick={() => handleAddToCart(product)}
        className="px-4 py-2 mt-2 text-black duration-200 ease-in-out bg-white hover:scale-105 hover:bg-green-500 hover:text-white"
      >
        Add to Cart
      </button>
    </div>
  </motion.div>
);

const ProductList = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchSearchProducts(searchQuery));
  }, [dispatch, searchQuery]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} has been added to the cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  if (loading) return <Spinner />; // Show spinner while loading

  if (error) return <ErrorComponent errorMessage={error} />;

  return (
    <div className="grid grid-cols-1 gap-5 px-2 md:px-0 md:grid-cols-3 xl:grid-cols-4">
      {products?.map((product) => (
        <Suspense fallback={<Spinner />} key={product.id}>
          <ProductItem
            product={product}
            handleAddToCart={handleAddToCart}
          />
        </Suspense>
      ))}
    </div>
  );
};

export default ProductList;
