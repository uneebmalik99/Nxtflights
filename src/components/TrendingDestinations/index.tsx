import { Fade } from "react-awesome-reveal";
import TrendingDestinationsContent from "../../content/TrendingDestinationsContent.json";
import {
  DestinationDescription,
  DestinationImage,
  DestinationItem,
  DestinationTitle,
  DestinationsContainer,
  TrendingDestinationsSection,
  BackgroundImage,
} from "../TrendingDestinations/styles";
import { TrendingDestinationsProps } from "./types";

const TrendingDestinations = ({ direction }: TrendingDestinationsProps) => {
  return (
    <Fade direction={direction} triggerOnce>
      <TrendingDestinationsSection>
        <h2 style={{ color: "#000;" }}>{TrendingDestinationsContent.title}</h2>
        <DestinationsContainer>
          {TrendingDestinationsContent.destinations.map(
            (destination, index) => (
              <DestinationItem key={index}>
                <DestinationImage
                  src={`../../assets/${destination.image}`}
                  alt={destination.name}
                />
                <DestinationTitle>{destination.name}</DestinationTitle>
                <DestinationDescription>
                  {destination.tours}
                </DestinationDescription>
              </DestinationItem>
            )
          )}
        </DestinationsContainer>
        <BackgroundImage src={"../../assets/bg.png"} alt="Background" />
      </TrendingDestinationsSection>
    </Fade>
  );
};

export default TrendingDestinations;
