import React from "react";
import { useParams } from "react-router-dom";

function Test() {
  const { country } = useParams<{ country: string }>();
  console.log("Country parameter:", country);
  return <div>Test Page, Country: {country}</div>;
}

export default Test;
