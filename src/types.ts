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
    submit?: string;
  };
  isDisabled: boolean;
  isSubmitted: boolean;
};
