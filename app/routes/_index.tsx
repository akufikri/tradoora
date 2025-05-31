import { BestSeller } from "~/components/sections/BestSeller";
import { Brands } from "~/components/sections/Brands";
import { Feature } from "~/components/sections/Features";
import { HeroSections } from "~/components/sections/HeroSections";
import { SpecialOffers } from "~/components/sections/SpecialOffers";
import { Subscribe } from "~/components/sections/Subscribe";
import { Testimoni } from "~/components/sections/Testimoni";

export default function Landing() {
  return (
    <>
      <HeroSections/>
      <Feature/>
      <BestSeller/>
      <SpecialOffers/>
      <Testimoni/>
      <Brands/>
      <Subscribe/>
    </>
  );
}
