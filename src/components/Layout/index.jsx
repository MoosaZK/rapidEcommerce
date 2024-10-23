import { Montserrat, Tomorrow } from "next/font/google";

import Header from "./header";
import Footer from "./footer";

// Montserrat Font Configuration
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// Tomorrow Font Configuration
const tomorrow = Tomorrow({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-tomorrow",
});

function Layout({ children }) {
  return (
    <>
      {/* <Header fontFamily={montserrat.className} />
      <main className={`${montserrat.variable} ${tomorrow.variable} text-white`}>{children}</main>
      <Footer fontFamily={tomorrow.className}/> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
