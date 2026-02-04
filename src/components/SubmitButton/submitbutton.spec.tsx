import { render, screen } from "@testing-library/react";
import { SubmitButton } from ".";
import { describe, expect, it } from "vitest";

describe("Submit Button component", () => {
  it("should render the component", () => {
    render(<SubmitButton onClickCallback={() => {}} isDisabled={false} />);
    expect(screen.getByTestId("submit-btn")).toBeVisible();
  });

  it("should render the button in disabled state", () => {
    render(<SubmitButton onClickCallback={() => {}} isDisabled={true} />);
    expect(screen.getByTestId("submit-btn")).toBeVisible();
    expect(screen.getByTestId("submit-btn")).toHaveAttribute("disabled");
  });
});
