import React, { useEffect } from "react";
import ReviewList from "./ReviewList.jsx";
import AddReview from "../../containers/RatingsReviewsContainers/ReviewsButtonsContainer.js";
import Grid from "@material-ui/core/Grid";
import Ratings from "../../containers/RatingsReviewsContainers/StarsContainer.js";

export default function Reviews(props) {
  console.log("here are props", props);
  useEffect(() => {
    props.listOfReviews([1, "REVIEWS"]);
  }, [props.prodInfo.id]);

  return (
    <div className="Ratings-Reviews">
      <h5>{"RATINGS & REVIEWS"}</h5>
      <Grid container spacing={6} className="hello testing">
        <Grid item>
          <Ratings />
        </Grid>
        <Grid item className="Reviews">
          <ReviewList props={props.reviews.results} />
          <AddReview />
        </Grid>
      </Grid>
    </div>
  );
}
