import { useMemo, useState, type ReactNode } from "react";
import { SentimentsContext } from "./SentimentsContext";
import type { SentimentProps } from "../types";

export const SentimentsProvider = ({ children }: { children: ReactNode }) => {
  const [sentiments, setSentiments] = useState<SentimentProps[]>([]);
  const average = useMemo(() => {
    if (!sentiments.length) return 0;
    return sentiments.reduce((sum, s) => sum + s.rating, 0) / sentiments.length;
  }, [sentiments]);

  // Add a new sentiment submission to the top of the sentiments array
  const addSentiment = (rating: number, comment: string) => {
    const newSentiment: SentimentProps = {
      rating,
      comment,
      createdAt: new Date(),
    };
    setSentiments((prevValue) => [newSentiment, ...prevValue]);
  };

  return (
    <SentimentsContext.Provider value={{ sentiments, average, addSentiment }}>
      {children}
    </SentimentsContext.Provider>
  );
};
