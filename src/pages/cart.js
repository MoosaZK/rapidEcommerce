import SEO from "@/common/SEO";
import CartComponent from "@/components/Cart";

export default function CartPage() {
  return (
    <>
      <SEO title="Cart" route="/" desc="lorem ipsum " />
      <CartComponent />
    </>
  );
}
