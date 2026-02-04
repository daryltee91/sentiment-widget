import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SentimentsProvider } from "../../providers/SentimentsProvider.tsx";
import App from "../../App";

describe("App", () => {
  it("should submit a sentiment successfully", async () => {
    await act(() => {
      render(
        <SentimentsProvider>
          <App />
        </SentimentsProvider>,
      );
    });

    await act(() => {
      // Select rating 1
      screen.getByTestId("rating-chips-1").click();

      // Enter comments
      const textarea = screen.getByTestId("comment-box-textarea");
      fireEvent.change(textarea, { target: { value: "Test comment 1" } });

      // Submit
      screen.getByTestId("submit-btn").click();
    });

    await screen.findByText("Thank you for your feedback.");

    // Assert that the sentiment is submitted successfully and shows up in the summary
    expect(screen.getByTestId("total-submissions").textContent).toBe("1");
    expect(screen.getByTestId("average-rating").textContent).toBe("1.00");
    expect(screen.getByTestId("sentiment-list-item-rating").textContent).toBe("Rating: 1");
    expect(screen.getByTestId("sentiment-list-item-comment").textContent).toBe(`"Test comment 1"`);
  });

  it("should show the most recent 3 ratings in summary", async () => {
    await act(() => {
      render(
        <SentimentsProvider>
          <App />
        </SentimentsProvider>,
      );
    });

    await act(async () => {
      for (let i = 1; i < 6; i++) {
        // Select rating
        screen.getByTestId(`rating-chips-${i}`).click();

        // Enter comments
        const textarea = screen.getByTestId("comment-box-textarea");
        fireEvent.change(textarea, { target: { value: `Test comment ${i}` } });

        // Submit
        screen.getByTestId("submit-btn").click();

        await waitFor(() => {
          expect(screen.getByTestId("submit-btn")).toHaveAttribute("disabled");
        });

        await new Promise((r) => setTimeout(r, 3000));
      }
    });

    expect(screen.getByTestId("total-submissions").textContent).toBe("5");
    expect(screen.getByTestId("average-rating").textContent).toBe("3.00");

    const mostRecentRatings = screen.getAllByTestId("sentiment-list-item");
    expect(mostRecentRatings).toHaveLength(3);

    // The most recent 3 shown should be for ratings 5, 4, and 3.
    mostRecentRatings.forEach((item, index) => {
      const rating = `Rating: ${5 - index}`,
        comment = `"Test comment ${5 - index}"`;

      expect(within(item).getByTestId("sentiment-list-item-rating").textContent).toBe(rating);
      expect(within(item).getByTestId("sentiment-list-item-comment").textContent).toBe(comment);
    });
  }, 20000);

  it("should prevent submission without choosing a rating", async () => {
    await act(() => {
      render(
        <SentimentsProvider>
          <App />
        </SentimentsProvider>,
      );
    });

    await act(() => {
      // Enter comments
      const textarea = screen.getByTestId("comment-box-textarea");
      fireEvent.change(textarea, { target: { value: "Test comment 1" } });

      // Submit
      screen.getByTestId("submit-btn").click();
    });

    await screen.findByText("Please select a rating.");

    expect(screen.getByTestId("total-submissions").textContent).toBe("0");
    expect(screen.getByTestId("average-rating").textContent).toBe("0.00");
  });

  it("should prevent submission without entering comments", async () => {
    await act(() => {
      render(
        <SentimentsProvider>
          <App />
        </SentimentsProvider>,
      );
    });

    await act(() => {
      // Select rating 1
      screen.getByTestId("rating-chips-1").click();

      // Submit
      screen.getByTestId("submit-btn").click();
    });

    await screen.findByText("Please enter your comments.");

    // Expect total submissions and average rating values to remain at 0.
    expect(screen.getByTestId("total-submissions").textContent).toBe("0");
    expect(screen.getByTestId("average-rating").textContent).toBe("0.00");
  });
});
