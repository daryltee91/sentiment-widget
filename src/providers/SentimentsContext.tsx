import { createContext, useContext } from "react";
import type { SentimentProps } from "../types";

type SentimentsContextProps = {
  sentiments: SentimentProps[];
  average: number;
  addSentiment: (rating: number, comment: string) => void;
};

export const SentimentsContext = createContext<SentimentsContextProps>({
  sentiments: [],
  average: 0,
  addSentiment: () => null,
});

export const useSentimentsContext = () => useContext(SentimentsContext);
