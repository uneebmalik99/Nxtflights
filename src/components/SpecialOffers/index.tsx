import { Fade } from "react-awesome-reveal";
import SpecialOffersContent from "../../content/SpecialOffers.json";
import {
  SpecialOffersHeading,
  SpecialOffersSection,
} from "../SpecialOffers/styles";
import { SpecialOffersProps } from "./types";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#4062BB",
  borderRadius: "15px",
};

const SpecialOffers = ({ direction }: SpecialOffersProps) => {
  return (
    <Fade direction={direction} triggerOnce>
      <SpecialOffersSection>
        <SpecialOffersHeading>
          {SpecialOffersContent.title}
        </SpecialOffersHeading>
        <Carousel style={{ marginTop: "20px" }}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </SpecialOffersSection>
    </Fade>
  );
};

export default SpecialOffers;
