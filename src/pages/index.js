import SEO from "@/common/SEO";
import HomeComponent from "@/components/Home";

export default function Home() {
  return (
    <>
      <SEO title="home" route="/" desc="lorem ipsum " />
      <HomeComponent />
    </>
  );
}
