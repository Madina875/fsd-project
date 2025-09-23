import { memo } from "react";
import { AboutHero } from "../../../widgets/about-hero";
import { AboutInfo } from "../../../widgets/about-info";

export const About = memo(() => {
  return (
    <div>
      <AboutHero />
      <AboutInfo />
    </div>
  );
});
