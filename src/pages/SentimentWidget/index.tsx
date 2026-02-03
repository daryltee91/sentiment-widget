import { useContext, useState } from "react";
import { SentimentsContext } from "../../providers/SentimentsContext";
import { RatingChips } from "../../components/RatingChips";
import { CommentBox } from "../../components/CommentBox";
import { SubmitButton } from "../../components/SubmitButton";
import { RatingSummary } from "../../components/RatingSummary";
import type { SentimentFormProps } from "../../types";
import "./style.css";

export const SentimentWidget = () => {
  const { addSentiment } = useContext(SentimentsContext);

  const [formState, setFormState] = useState<SentimentFormProps>({
    rating: 0,
    comment: "",
    errors: {},
    isDisabled: false,
    isSubmitted: false,
  });

  const setRating = (newRating: number) => {
    setFormState((prevState: SentimentFormProps) => {
      const newState = { ...prevState, rating: newRating };
      delete newState.errors.rating;

      return newState;
    });
  };

  const setComment = (newComment: string) => {
    setFormState((prevState: SentimentFormProps) => {
      const newState = { ...prevState, comment: newComment };
      delete newState.errors.comment;

      return newState;
    });
  };

  const handleSubmit = () => {
    const errors: { rating?: string; comment?: string } = {};

    if (!formState.rating) {
      errors.rating = "Please select a rating.";
    }

    if (!formState.comment) {
      errors.comment = "Please enter your comments.";
    }

    if (Object.keys(errors).length > 0) {
      setFormState((prevState) => {
        return {
          ...prevState,
          errors,
          isDisabled: false,
        };
      });

      return;
    }

    // Disable form submission.
    setFormState((prevState) => {
      return {
        ...prevState,
        isDisabled: true,
        isSubmitted: true,
      };
    });

    addSentiment(formState.rating, formState.comment);

    // Clear the form.
    setFormState((prevState) => {
      return {
        ...prevState,
        rating: 0,
        comment: "",
      };
    });

    // Enable form submission after 3 seconds.
    setTimeout(() => {
      setFormState((prevState) => {
        return {
          ...prevState,
          isDisabled: false,
          isSubmitted: false,
        };
      });
    }, 3000);
  };

  return (
    <div className="sentiment-widget-container">
      <h1>Sentiment Widget</h1>

      <RatingChips
        rating={formState.rating}
        error={formState.errors.rating}
        setRating={setRating}
      />
      <CommentBox
        comment={formState.comment}
        error={formState.errors.comment}
        setComment={setComment}
      />
      <SubmitButton onClickCallback={handleSubmit} isDisabled={formState.isDisabled} />
      <span className="success-text">
        {formState.isSubmitted ? "Thank you for your feedback." : ""}
      </span>
      <RatingSummary />
    </div>
  );
};
