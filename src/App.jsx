import Biopharmaceutical from "./components/Biopharmaceutical";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroArea from "./components/HeroArea";
import ProductInfo from "./components/ProductInfo";
import Products from "./components/Products";
import Roi from "./components/Roi";
import SocialProof from "./components/SocialProof";
import Value from "./components/Value";
import ValueProp from "./components/ValueProp";

function App() {
  return (
    <div className="bg-[#fbfbfa] mx-0 my-0">
      <Header />

      <HeroArea />

      <SocialProof />

      <Roi />

      <ProductInfo />

      <ValueProp />

      <Products />

      <Biopharmaceutical />

      <Value />

      <Blog />

      <Footer />
    </div>
  );
}

export default App;
