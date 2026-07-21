import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";
import Toast from "../common/Toast";

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Toast />
    </>
  );
};

export default Layout;
