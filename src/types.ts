export type SentimentProps = {
  rating: number;
  comment: string;
  createdAt: Date;
};

export type SentimentFormProps = {
  rating: number;
  comment: string;
  errors: {
    rating?: string;
    comment?: string;
  };
  isDisabled: boolean;
  isSubmitted: boolean;
};
