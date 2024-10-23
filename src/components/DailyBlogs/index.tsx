import { Fade } from "react-awesome-reveal";
import DailyBlogsContent from "../../content/DailyBlogs.json";
import {
  CustomButton,
  DailyBlogsSection,
  DailyBlogsTitle,
  StyledMetaDescription,
  StyledMetaTitle,
} from "../DailyBlogs/styles";
import { DailyBlogsProps } from "./types";
import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";

const cardData = [
  {
    title:
      "Virgin Atlantic \nLaunche new upper class retreat suites-A new Era....",
    description: "August 20, 2022",
    imageUrl: "../../../assets/blog_1.webp",
  },
  {
    title: "Airline lounge and paid lounge comparison at heathrow",
    description: "August 20, 2022",
    imageUrl: "../../../assets/blog_2.webp",
  },
  {
    title: "Britis airways first class review",
    description: "August 20, 2022",
    imageUrl: "../../../assets/blog_3.webp",
  },
  {
    title:
      "Virgin Atlantic Launche new upper class retreat suites-A new Era....",
    description: "August 20, 2022",
    imageUrl: "../../../assets/blog_1.webp",
  },
  {
    title: "Airline lounge and paid lounge comparison at heathrow",
    description: "August 20, 2022",
    imageUrl: "../../../assets/blog_2.webp",
  },
  {
    title: "Britis airways first class review",
    description: "August 20, 2022",
    imageUrl: "../../../assets/blog_3.webp",
  },
];

const DailyBlogs = ({ direction }: DailyBlogsProps) => {
  return (
    <Fade direction={direction} triggerOnce>
      <DailyBlogsSection>
        <DailyBlogsTitle>{DailyBlogsContent.title}</DailyBlogsTitle>
        <Row gutter={[16, 16]} justify="center">
          {cardData.map((card, index) => (
            <Col span={24} md={8} key={index}>
              <Card
                hoverable
                bordered
                style={{
                  borderRadius: "10px",
                  width: "100%",
                  height: "100%",
                  margin: "0 auto",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  alt={card.title}
                  src={card.imageUrl}
                  style={{
                    borderRadius: "10px",
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    marginBottom: "30px",
                  }}
                />
                <Meta
                  title={<StyledMetaTitle>{card.title}</StyledMetaTitle>}
                  description={
                    <StyledMetaDescription>
                      {card.description}
                    </StyledMetaDescription>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: "center", marginTop: "35px" }}>
          <CustomButton
            type="ghost"
            size="large"
            className="viewAllBtn customBtnClass"
          >
            View All Posts
          </CustomButton>
        </div>
      </DailyBlogsSection>
    </Fade>
  );
};

export default DailyBlogs;
