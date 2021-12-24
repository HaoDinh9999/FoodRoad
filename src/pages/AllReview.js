import React from "react";
import "../App.css";
import ReviewDetails from "../components/reviewdetails/ReviewDetails";
import WriteReview from "../components/reviewdetails/WriteReview";

function AllReview() {
  return (
    <>
      <div className="review">
        <WriteReview />
      </div>
    </>
  );
}

export default AllReview;
