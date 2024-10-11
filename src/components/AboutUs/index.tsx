import { Fade } from "react-awesome-reveal";
import AboutUsContent from "../../content/AboutUs.json";
import {
  AboutUsContainer,
  AboutUsSection,
  AboutTitle,
} from "../AboutUs/styles";
import { AboutUsProps } from "./types";

const AboutUs = ({ direction }: AboutUsProps) => {
  return (
    <Fade direction={direction} triggerOnce>
      <AboutUsSection>
        <h2 style={{ color: "#333", fontSize: "40px", fontWeight: 600 }}>{AboutUsContent.title}</h2>
        <AboutUsContainer>
          <AboutTitle>{AboutUsContent.description}</AboutTitle>
        </AboutUsContainer>
      </AboutUsSection>
    </Fade>
  );
};

export default AboutUs;
