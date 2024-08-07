import React from "react";
import { ProductData } from "../ProductData";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

const StarRating = ({ itemKey }) => {
  let rating = ProductData[itemKey].rating;
  const stars = [];

  //   This converts rating into a star array
  for (let i = 0; i < 5; i++) {
    if (rating >= 1) {
      stars.push(1); // Push 1 if rating is 1 or more
      rating -= 1; // Decrease rating by 1
    } else if (rating > 0) {
      stars.push(rating); // Push the remaining rating if it's between 0 and 1
      rating = 0; // Set rating to 0 since we've pushed the remainder
    } else {
      stars.push(0); // Push 0 if rating is 0
    }
  }

  return (
    <div className="flex items-center">
      {stars.map((star, index) => {
        return star === 1 ? (
          <IoStar key={index} className="ml-1 text-blue-400" />
        ) : star === 0 ? (
          <IoStarOutline key={index} className="ml-1 text-blue-400" />
        ) : (
          <IoStarHalf key={index} className="ml-1 text-blue-400" />
        );
      })}
    </div>
  );
};

export default StarRating;
