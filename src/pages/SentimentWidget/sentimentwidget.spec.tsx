import { render, screen } from "@testing-library/react";
import { SentimentWidget } from ".";
import { describe, expect, it } from "vitest";

describe("Sentiment Widget page", () => {
  it("should render the widget with all individual components", () => {
    render(<SentimentWidget />);

    expect(screen.getByTestId("rating-chips")).toBeVisible();
    expect(screen.getByTestId("comment-box")).toBeVisible();
    expect(screen.getByTestId("submit-btn")).toBeVisible();
    expect(screen.getByTestId("rating-summary")).toBeVisible();
  });
});
