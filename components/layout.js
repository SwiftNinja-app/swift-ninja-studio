import Footer from "../components/footer";
import Meta from "../components/meta";
import Navbar from "../components/navbar";

export default function Layout({ preview, children }) {
  return (
    <div className="h-screen">
      <Meta />
      <Navbar />
      <div className="">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
