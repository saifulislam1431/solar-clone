import AlternativeFunding from "@/components/Home/AlternativeFunding/AlternativeFunding";
import Banner from "@/components/Home/Banner/Banner";
import PartnerContainer from "@/components/Home/PartnerContainer/PartnerContainer";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Banner />
      <PartnerContainer />
      <AlternativeFunding />
    </section>
  );
}
