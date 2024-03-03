import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import MainHeader from "./components/MainHeader";
import NavBar from "./components/NavBar";
import ShopNow from "./components/ShopNow";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <>
    <MainHeader />
    <NavBar is_logo={false}/>
    <Banner/>
    <BestSeller/>
    <ShopNow/>
    <WhyUs/>
    <FeaturedProducts/>
    <Footer/>
    </>
  );
}
