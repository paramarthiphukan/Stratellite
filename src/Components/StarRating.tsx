import { useState } from "react";
import { icons } from "../utils/icons";

const StarRating = () => {
  const [rating, setRating] = useState<any>(null);
  const [hover, setHover] = useState<any>(null);
  return (
    <div className="flex">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label htmlFor="rating">
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={ratingValue}
            />
            <div
              className={`cursor-pointer mx-1 ${
                ratingValue <= (hover || rating)
                  ? "text-yellow-400"
                  : "text-gray-200"
              }`}
              onClick={() => setRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            >
              {icons.feedback.star}
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
