import { render, screen } from "@testing-library/react";
import { RatingChips } from ".";
import { describe, expect, it } from "vitest";

describe("Rating Chips component", () => {
  it("should render the component", () => {
    render(<RatingChips rating={0} error="" setRating={() => {}} />);
    expect(screen.getByTestId("rating-chips")).toBeVisible();
  });

  it("should render all 5 rating chips", () => {
    render(<RatingChips rating={0} error="" setRating={() => {}} />);

    for (let i = 1; i < 6; i++) {
      expect(screen.getByTestId(`rating-chips-${i}`)).toBeVisible();
    }
  });
});
