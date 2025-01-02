import Biopharmaceutical from "./Biopharmaceutical";
import Blog from "./Blog";
import Footer from "./Footer";
import HeroArea from "./HeroArea";
import MainContainer from "./MainContainer";
import NavBar from "./NavBar";
import ProductInfo from "./ProductInfo";
import Products from "./Products";
import Roi from "./Roi";
import SocialProof from "./SocialProof";
import Value from "./Value";
import ValueProp from "./ValueProp";

function AppLayout() {
  return (
    <div className="bg-[#fbfbfa]">
      <NavBar />

      <MainContainer>
        <HeroArea />

        <SocialProof />

        <Roi />

        <ProductInfo />

        <ValueProp />

        <Products />

        <Biopharmaceutical />

        <Value />

        <Blog />
      </MainContainer>
      <Footer />
    </div>
  );
}

export default AppLayout;
