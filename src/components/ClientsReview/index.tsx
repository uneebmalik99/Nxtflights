import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ClientsReview.css";
import { ClientsReviewProps } from "./types";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review:
      "This place is exactly like the picture posted on NxtFlight. Great service, we had a great stay!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Amazing experience! The customer service was top-notch.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    review: "Highly recommend this place for anyone looking for a great stay.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    review: "Highly recommend this place for anyone looking for a great stay.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const ClientsReview = ({ direction }: ClientsReviewProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="review-container">
      <h1>Good news from far away</h1>
      <p>What our clients think</p>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="review-slide">
            <div className="review-content">
              {/* Use random avatar image */}
              <img
                className="user-avatar"
                src={review.avatar}
                alt={review.name}
              />
              <p className="review-text">"{review.review}"</p>
              <h3>{review.name}</h3>
              <div className="review-rating">
                {"★".repeat(review.rating)} {"☆".repeat(5 - review.rating)}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientsReview;
