import Footer from "../components/footer";
import Meta from "../components/meta";
import Navbar from "../components/navbar";

export default function Layout({ preview, children }) {
  return (
    <div className="flex flex-col h-screen">
      <Meta />
      <Navbar />
      <div className="flex-grow">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
