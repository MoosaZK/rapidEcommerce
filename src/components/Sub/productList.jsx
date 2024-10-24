import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchProducts, addToCart } from "@/store/slice/cartSlice";
import Image from "next/image";
import { toast } from "react-toastify";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <div className="grid grid-cols-4 gap-5">
      {products?.map((product) => (
        <div key={product.id} className="flex flex-col text-white bg-black">
          <Image
            src={product.images[0]}
            width={500}
            height={500}
            alt={product.title}
            className="w-full aspect-square"
          />
          <div className="p-4">
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="px-4 py-2 mt-2 text-white bg-blue-500 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
