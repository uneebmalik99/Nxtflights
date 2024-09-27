import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import contentData from "../../content/CountriesContent.json";
import { Col, Row } from "antd";
import Container from "../../common/Container";

interface Content {
  title: string;
  description: string;
  things_to_do: string;
  images: { [key: string]: string };
}

type ContentData = {
  [key: string]: Content;
};

function CountryPage() {
  const { location } = useParams<{ location: string }>();
  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    const data = (contentData as ContentData)[location];
    if (data) {
      setContent(data);
    } else {
      setContent({
        title: "Location Not Found",
        description:
          "Sorry, the requested location does not have content available.",
        things_to_do: "Things to do Not Found",
        images: {},
      });
    }
  }, [location]);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container>
        <Row>
          <Col span={15}>
            <h4 style={{ fontSize: "40px" }}>{content.title}</h4>
            <p style={{ fontSize: "15px" }}>{content.description}</p>
            <h4 style={{ fontSize: "40px" }}>{content.things_to_do}</h4>
            {/* Loop through images and display them */}
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              {Object.values(content.images).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    borderRadius: "8px",
                  }}
                />
              ))}
            </div>
          </Col>
          <Col span={9}>
            <h6 style={{ fontSize: "24px" }}>Business Class Deals</h6>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CountryPage;
