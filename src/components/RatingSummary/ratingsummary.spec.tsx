import { render, screen } from "@testing-library/react";
import { RatingSummary } from ".";
import { describe, expect, it } from "vitest";

describe("Rating Summary component", () => {
  it("should render the component", () => {
    render(<RatingSummary />);
    expect(screen.getByTestId("rating-summary")).toBeVisible();
    expect(screen.getByTestId("total-submissions").textContent).toBe("0");
    expect(screen.getByTestId("average-rating").textContent).toBe("0.00");
  });
});
