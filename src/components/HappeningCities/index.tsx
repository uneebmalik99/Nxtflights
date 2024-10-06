import { Row, Col, Tag } from "antd";
import { HappeningCitiesProps } from "./types";
import {
  BenefitItem,
  Description,
  GlobeImage,
  Heading,
  SubHeading,
  Title,
} from "./styles";
interface Benefit {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  fontColor: string;
}

const BenefitList: Benefit[] = [
  {
    tag: "Advertising",
    tagColor: "#DBEAFE",
    title: "Cost-effective advertising",
    description:
      "With a free listing, you can advertise your rental with no upfront costs",
    fontColor: "#3F5EBD",
  },
  {
    tag: "Exposure",
    tagColor: "#DCFCE7",
    title: "Reach millions with Chisfis",
    description:
      "With a free listing, you can advertise your rental with no upfront costs",
    fontColor: "#3B8156",
  },
  {
    tag: "Secure",
    tagColor: "#FEE2E2",
    title: "Cost-effective advertising",
    description:
      "With a free listing, you can advertise your rental with no upfront costs",
    fontColor: "#D07676",
  },
];

function HappeningCities({ direction }: HappeningCitiesProps) {
  return (
    <Row gutter={[16, 16]} style={{ padding: "20px", marginTop: 150 }}>
      {/* Left Side - Image */}
      <Col
        xs={24}
        md={16}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GlobeImage src="../../../assets/cities.png" alt="Happening Cities" />
      </Col>

      {/* Right Side - Text */}
      <Col xs={24} md={8}>
        <SubHeading>Benefits</SubHeading>
        <Heading>Happening Cities</Heading>
        {BenefitList.map((benefit, index) => (
          <BenefitItem key={index}>
            <Tag
              color={benefit.tagColor}
              style={{
                borderRadius: 28,
                width: 100,
                height: 30,
                padding: 4,
                textAlign: "center",
                color: `${benefit.fontColor}`,
                marginBottom: 15,
              }}
            >
              {benefit.tag}
            </Tag>
            <Title>{benefit.title}</Title>
            <Description>{benefit.description}</Description>
          </BenefitItem>
        ))}
      </Col>
    </Row>
  );
}

export default HappeningCities;
