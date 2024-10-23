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
  TrendingDestinationsHeading,
} from "../TrendingDestinations/styles";
import { TrendingDestinationsProps } from "./types";

const TrendingDestinations = ({ direction }: TrendingDestinationsProps) => {
  return (
    <Fade direction={direction} triggerOnce>
      <TrendingDestinationsSection>
        <TrendingDestinationsHeading>
          {TrendingDestinationsContent.title}
        </TrendingDestinationsHeading>
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
        <BackgroundImage src={"../../assets/plane_bg.webp"} alt="Background" />
      </TrendingDestinationsSection>
    </Fade>
  );
};

export default TrendingDestinations;
