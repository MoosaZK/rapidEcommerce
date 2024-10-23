import Link from "next/link";
import { useSelector } from "react-redux";

function Header({ fontFamily }) {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="w-full py-10 bg-black">
      <nav className="container flex items-center justify-between mx-auto">
        <Link href={"/"}>
          <p className="font-bold text-white">Products</p>
        </Link>
        <Link href={"/cart"}>
          <button className="relative px-10 py-2 bg-white">
            <p className="absolute bg-black w-[20px] h-[20px] rounded-full text-white right-2 top-1 flex justify-center items-center text-[12px]">
              {totalQuantity > 0 ? totalQuantity : 0}{" "}
            </p>
            <p>Cart</p>
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
