import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";

const TopSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  .heading {
    align-self: flex-start;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    color: "#000" !important;
  }
`;

const TopSection = styled.section`
  display: flex;
  gap: 20px;
  justify-content: flex-start;

  .image-container {
    flex: 1;
    max-width: 400px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
  }
`;

const BottomSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 190px;
    height: 150px;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 80%;
      height: 80%;
      object-fit: contain;
    }
  }
`;

const Airline: React.FC = () => {
  const topImages = [
    {
      src: "https://s3-alpha-sig.figma.com/img/a781/7a36/203ccee658c611dd306ab22f950dfe3d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cXcUBt4TDfxHGy713mPODyJfgIlulvm3Zt5Tgo1aYrdqOvOcsRxscBFBCanNJOgrJwFeJ~7kqK6tCK9s8RhJzbrNIyLZ4RL2xV91ovNJKXwkUS0fzsV-3jsI7Tj5SuukdXJsBQD6bFmgzqsAiEW0VDwkfM-05Ew46crEmFP~bLtVeNHWkMPJZyT~o7yXYqaDGi7n4lvvXKit2mRUIHH458YcPrwPjXVFPU2Eq9MsG0FHP6GCxkPW5VhZJ9L~UJ6gGaYTvViXoJ8gxDwbZ-KmKkVCWI-WOEJSkC00o2fHQZMHzfYYpocI5Gb5IN8EIq77EDvIUS527Fq7o7~2oUxI9w__",
      alt: "British Airways",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/1ee3/12b6/29a58c78db890977c8d0e769025a38eb?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Czy7gMS-OHMwFX1laLUeO~xtfzyzevxKsw~TPtmR800Stx5KXeKo3BzdRv2NZdaOJcqaCwdmjRdj0C0H~RkR8oXK6Ofo67gOqaQDqunXJ94IlpXlvKHrgejmKnWHHK7fX6Wm0O1O9lVHymozmUgNSGJZSyNxwbHBa2iXrrCmI9C9JYfUemtJG~YK6yaiGQnsrKTr7Vd0ZkXYYEONq9DVA9RBjmmc~irZ7dN5FmHpollqCjslu6PFp7xgLQ9SsMycuTUqstklLPcZpnmxB-iytH2wCIon~gNgkOlsRC~s4t2NOBnhBH8z3lEH54u8OHu4Fn8OV5SpVxRgDVL7-8Gc3Q__",
      alt: "Virgin Atlantic",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/29ad/185b/20d77b95c4dd3946a46901dcb8e48ee1?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YUpf0WO9kclAKZ38eENQmx1NuHP9ne3l9eCRLOYp1p05f9Putd8VIo5aEgZGfDudEhwdGmx7J42Zo~nr0uR4La8Qi7cycCuFn7MMOpq~SIQnYvBdMckD2siNelXjQ0IcMpz9d2ATubJJtQE8V6qsXe2chWaTefMlGsYEAE4Z5xrG67zZ-nSGaa6sfxJeDXNZvOE2~eTFc7LaEOwC74cce8qYJfC0lOC4Lq~mxmh27Z8o9z8CN7ODGpxe~qk2kQSHx415WZS~AuRoKJNxn8k3T-f3s6mAlFoLsmMYzr8bzZiCIplB033Co7UjDpzyWhsE5SoeFUw5z3tL19PHKVn6-Q__",
      alt: "American Airlines",
    },
  ];

  const airlineLogos = [

    {
      logo: "https://s3-alpha-sig.figma.com/img/1099/464a/77cdf464fa03f030798ea35aca7f7337?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aPUwvSOZRBJ4LEgT73m8ejJarItDwALoB-qWwxCmX218pUs6-d9Vjy-uY44g7VNh0h13XQQkYFYeWO6LGQRikjBY9S6M9~TUxw5IA2LXTllUGX3r5m0frsPq6FoTJSpsl7VSaqZbywZ~abud~MqLWxIo3fiOQM6uwbR2iZG4dxEy9MRq3Mmk3OjQHEuZ7Nx5tKX1YqPSnPKsqvEJ0-HWFtVPM4w8mYgEpcuL9UXoLL9d83IV3wmNT4GZ3KL6sMPJZzVXd-dXgN~pkhg3jWyeHyLbijS3VYSgzEmRu8vArijzn6OjWXmgwvyoR~~A81vn6B7btoUGNlSECjPlY-Hciw__",
      name: "Emirates",
      url: "#",
    },
    {
      logo: "https://s3-alpha-sig.figma.com/img/31d9/d32d/8cce671cf7f22f42b0ee0eb2abdf83ea?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=grAq4VxexpSlFpWcldYnnTOQaNouky-EP~OzY3sT7zxt-GT4d5Owi49zFGgU88XppA3PMClEVUWchscw4JcN1sc9yZQyRI63VAXqerEAvwmUQ71ZiSfBCnEqhIXsB9auPeUFJ5S9GfwtMBdgr8NcFF57bbZQcHIJzlhCbpBtEJVphuD1eMjIvXceFDWkae2N5M4~EikJjV~K6Gvx4iCZYtIWTZSh8f3jSMoR1nmEWd8XvWzmyiZ6Lq9QuMiduicK8mqhCbqaX2D3LrHBzt94DS4gnyFuAgoEnnuS1YUDWoklh9y3Wtd~Iuczq0bvaXbNRshVSp7MU5o5IV-5hde6Hw__",
      name: "Qatar Airways",
      url: "#",
    },
    {
      logo: "https://s3-alpha-sig.figma.com/img/2864/5f65/751e486ab74a840010cf622a8e821e15?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UpOEI3DfbMVXQzJbF2El5YqbbsI3PFx86MnMId7XQLNLV7wCMRhCc4ah4FPzZHLxVUtsZtzYUk4QnwTiLVpwI9yOJXRLv5Q~bKZELVpJVcTjfQsoE4sa8fZdEYhelb0AU6VuFIAr~qQdNzy6GE7uYJ78wfcPiAB4GvsfxknlRdwBOOg3VLLn8w1PSB3bkQAxUsa4rCmqzbgqRqiQqrH84BGdxgRtiguVySmuYLrFFSbY0cklMpC2kjB5X7hUrnLhWCoqgXKUwCmkralcM~7mmTLpPh8tgrBSVB4z6RM8DvSKrr6UZOU5BgPTrXB1K29TxSaDZbyH0qy2~ZzzQJkpig__",
      name: "Etihad Airways",
      url: "#",
    },
    {
      logo: "https://s3-alpha-sig.figma.com/img/e86e/a90b/33923572f4ac6c93d789da3567ebc423?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T8eL7nF5nwoLjjRtzmZ1q34VFaZH4cPI0t0mFLbBXzDHTOl4WSx~FivsYsT6SridnQwxS3kKAlaMr2~8H685YR8NErf5G6MLYuAArOsXV4MFdA0NSZIYfTJe1vk4aGvrhIXTQBD~x5RpYYtLim5URvJZ-8Gb65AjaoB8UIDsbt~omqFSYtKWESTH-RfuD7fG5xcZiuQdIOmpwyVLNYJ96GMDfs66x9P24kbaNDa8E9xi9gBO8Xfxb5uu8~Rk8JiK7SukY8365uiySvzg1MIj8bNU1wc6BTK6-rANJZSic7-l~6-Y~ro-3i9yFhFZAE9babWOkpUsjkJ5UbLUMRi4Dw__",
      name: "Latam",
      url: "#",
    },
    {
      logo: "https://s3-alpha-sig.figma.com/img/a503/4b2e/24ed900da0009aaacb3744aadc862cfc?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VwbDh9IHbN2KgxZ8KoeEATun8x~jQ9tTJDE6PiAffn6C8FaEuwdkejHpEzNVyvMKGBj96M7Lzh0u9z-y0G-pLaH4gei4bAA8n66~nnaD1q1TxlznUsRBFu3uRkdTopECSZtZtqUYFYbjfwdArhEI2RFgkMX0QIE9zy8vmM9EvhNdvSYhgfOO4DO-zuGymDd9tQ7EuXeupx73BReANLZl7A50K~3LdczVPoByMKUkD5UcvGShY9kOqkxiRPQvvP0H5RprhSpGUthXh7RaWIMxSxMx9kA7b4TwzE38B-Q8eVICM6Bfpc~kxsWNc8S5-IbGAgtBSJO9lTf-Eh~JKdsokw__",
      name: "Singapore Airelines",
      url: "#",
    },
    {
      logo: "https://s3-alpha-sig.figma.com/img/c040/6192/3f29c5dbf9c548b12c3f3e46748feefc?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TlXXjHIxexPFPCnm9qPjXZs6duakTZv3RNwriZBjYMyt8e69GdNFer7Abny8u~CacJQlwEDD2IToZW814u4RAxHbjIA~nsCrKaWpZHQCGp3ybN6CTIJIh3NPuROCWcuQtAEy~njKeu66jyPWVoFS3vTV5tQPdGton4On2WWduLrUvxAOMZaNYLtnxAtkusXJS5JK1ylcoUKIFF6SCoOfnDojQnSAe9-g886R2fpYoJ7YZ4TLQJNaT0h7qstHxm2YO1UbgNHLGciYqpfvuNvMlsmRrKzNyTlfOvSQKJttOrUomLHVYAfQA6gI2WCD2KnITG9XJeIFKrlLlXWgl1h92Q__",
      name: "Cathy Pacific",
      url: "#",
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const handleAirlineClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div style={{ marginBlock: '20px' }}>
      {/* Top Section with Heading */}
      <TopSectionWrapper>
        <h1 style={{ alignSelf: 'center', fontSize: 28 }} className="heading">Partner Airlines</h1>
        <TopSection>
          {topImages.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </TopSection>
      </TopSectionWrapper>

      {/* Bottom Section */}
      <BottomSection>
        {airlineLogos.slice(0, 6).map((airline, index) => (
          <div
            key={index}
            className="logo-container"
            onClick={() => handleAirlineClick(airline.url)}
          >
            <img src={airline.logo} alt={airline.name} />
          </div>
        ))}

      </BottomSection>
    </div>
  );
};

export default Airline;
