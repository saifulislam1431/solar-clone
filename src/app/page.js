import AlternativeFunding from "@/components/Home/AlternativeFunding/AlternativeFunding";
import Banner from "@/components/Home/Banner/Banner";
import GetStarted from "@/components/Home/GetStarted/GetStarted";
import IndustriesWeServe from "@/components/Home/IndustriesWeServe/IndustriesWeServe";
import PartnerContainer from "@/components/Home/PartnerContainer/PartnerContainer";
import SCGVsMajor from "@/components/Home/SCGVsMajor/SCGVsMajor";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import TrustfulFunding from "@/components/Home/TrustfulFunding/TrustfulFunding";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Banner />
      <PartnerContainer />
      <AlternativeFunding />
      <TrustfulFunding />
      <SCGVsMajor />
      <IndustriesWeServe />
      <Testimonials />
      <GetStarted />
    </section>
  );
}
