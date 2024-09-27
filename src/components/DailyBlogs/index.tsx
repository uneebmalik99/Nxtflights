import { Fade } from "react-awesome-reveal";
import DailyBlogsContent from "../../content/DailyBlogs.json";
import { DailyBlogsSection, DailyBlogsTitle } from "../DailyBlogs/styles";
import { DailyBlogsProps } from "./types";
import { Button, Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";

const cardData = [
  {
    title: "Virgin Atlantic Launche new upper class retreat suites-A new Era....",
    description: "August 20, 2022",
    imageUrl: "../../../assets/blog_1.png",
  },
  {
    title: "Virgin Atlantic Launche new upper class retreat suites-A new Era....",
    description: "August 20, 2022",
    imageUrl: "../../../assets/blog_2.png",
  },
  {
    title: "Virgin Atlantic Launche new upper class retreat suites-A new Era....",
    description: "August 20, 2022",
    imageUrl: "../../../assets/blog_3.png",
  },
  {
    title: "Virgin Atlantic Launche new upper class retreat suites-A new Era....",
    description: "August 20, 2022",
    imageUrl: "../../../assets/blog_1.png",
  },
  {
    title: "Virgin Atlantic Launche new upper class retreat suites-A new Era....",
    description: "August 20, 2022",
    imageUrl: "../../../assets/blog_2.png",
  },
  {
    title: "Virgin Atlantic Launche new upper class retreat suites-A new Era....",
    description: "August 20, 2022",
    imageUrl: "../../../assets/blog_3.png",
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
                <Meta title={card.title} description={card.description} />
              </Card>
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button type="ghost" size="large" shape="round">
            View All Posts
          </Button>
        </div>
      </DailyBlogsSection>
    </Fade>
  );
};

export default DailyBlogs;
