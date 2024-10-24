import Link from "next/link";
import { useSelector } from "react-redux";

function Header({ fontFamily }) {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="fixed top-0 z-50 w-full py-5 bg-black md:py-10">
      <nav className="container flex items-center justify-between px-2 mx-auto md:px-0">
        <Link href={"/"}>
          <p className="font-bold text-white">Products</p>
        </Link>
        <Link href={"/cart"}>
          <button className="relative px-10 py-2 bg-white">
            <p className="absolute bg-black w-[20px] h-[20px] rounded-full text-white right-2 top-1 flex justify-center items-center text-[12px]">
              {totalQuantity > 0 ? totalQuantity : 0}{" "}
            </p>
            <p className="font-semibold">Cart</p>
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
