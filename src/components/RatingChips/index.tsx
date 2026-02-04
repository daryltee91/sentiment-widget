import "./style.css";

export const RatingChips = ({
  rating,
  error,
  setRating,
}: {
  rating: number;
  error?: string;
  setRating: (newRating: number) => void;
}) => {
  const allRatings = [1, 2, 3, 4, 5];

  return (
    <div id="rating-chips-container">
      <h3>Rating </h3>
      <span className="error-text">{error}</span>

      <div id="rating-chips" data-testid="rating-chips">
        {allRatings.map((value) => {
          return (
            <RatingChip
              key={value}
              value={value}
              onClickCallback={setRating}
              isActive={rating === value}
            />
          );
        })}
      </div>
    </div>
  );
};

const RatingChip = ({
  value,
  onClickCallback,
  isActive,
}: {
  value: number;
  onClickCallback: (value: number) => void;
  isActive: boolean;
}) => {
  return (
    <button
      className={isActive ? "selected" : ""}
      onClick={() => onClickCallback(value)}
      data-testid={`rating-chips-${value}`}
    >
      {value}
    </button>
  );
};
