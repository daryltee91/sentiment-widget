import { useContext } from "react";
import { SentimentsContext } from "../../providers/SentimentsContext";
import type { SentimentProps } from "../../types";
import "./style.css";
import dayjs from "dayjs";

export const RatingSummary = () => {
  const { sentiments, average } = useContext(SentimentsContext);

  return (
    <div id="summary" data-testid="rating-summary">
      <h2>Summary</h2>
      <p>
        Total submissions: <strong data-testid="total-submissions">{sentiments.length}</strong>
      </p>
      <p>
        Average rating: <strong data-testid="average-rating">{average.toFixed(2)}</strong>
      </p>
      <hr />
      <ul>
        {sentiments.slice(0, 3).map((sentiment, index) => {
          return <SentimentListItem key={index} sentiment={sentiment} />;
        })}
      </ul>
    </div>
  );
};

const SentimentListItem = ({ sentiment }: { sentiment: SentimentProps }) => {
  return (
    <li className="sentiment-list-item" data-testid="sentiment-list-item">
      <div>
        <span data-testid="sentiment-list-item-rating">Rating: {sentiment.rating}</span>
        <small>{dayjs(sentiment.createdAt).format("DD MMM YYYY h:mm a")}</small>
      </div>
      <em data-testid="sentiment-list-item-comment">"{sentiment.comment}"</em>
    </li>
  );
};
