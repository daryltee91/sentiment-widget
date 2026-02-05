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
  const addSentiment = async (rating: number, comment: string) => {
    // Post the new sentiment to the backend
    const req = await fetch(`https://httpbin.org/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application-json",
      },
      body: JSON.stringify({ rating, comment }),
    });

    // If error occurs, do not add sentiment
    if (!req.ok || req.status !== 200) {
      return false;
    }

    const newSentiment: SentimentProps = {
      rating,
      comment,
      createdAt: new Date(),
    };
    setSentiments((prevValue) => [newSentiment, ...prevValue]);

    return true;
  };

  return (
    <SentimentsContext.Provider value={{ sentiments, average, addSentiment }}>
      {children}
    </SentimentsContext.Provider>
  );
};
