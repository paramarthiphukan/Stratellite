import { icons } from "../utils/icons";

interface StaticRatingProps {
  rating: number;
}

const StaticRating: React.FC<StaticRatingProps> = ({ rating }) => {
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
              className={`mx-1 ${
                ratingValue <= rating ? "text-yellow-400" : "text-gray-200"
              }`}
            >
              {icons.feedback.star}
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default StaticRating;
