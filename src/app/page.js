import Image from "next/image";
import Homes from "./Home/Homes";
import HomeLayoutCrushbarriers from "./Home/HomeLayoutCrushbarriers";
import Homeourproject from "./Home/HomeOurProject";
import MarketGrowth from "./Home/HomeMarketGrowth";
import ApplicationAreas from "./Home/HomeApplicationArea";
import HomeManufacturingProcess from "./Home/HomeManufacturingprocess";
import Newsletter_Email from "./Home/HomeNewletter";
export default function Home() {
  return (
  <>
  <Homes/>
  <HomeLayoutCrushbarriers/>
  <Homeourproject/>
  <MarketGrowth/>
  <ApplicationAreas/>
  <HomeManufacturingProcess/>
  <Newsletter_Email/>
  </>
  );
}
