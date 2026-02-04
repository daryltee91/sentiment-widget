import { describe, expect, it } from "vitest";
import { act, render, screen } from "@testing-library/react";
import { ThemeToggle } from ".";

describe("Theme Toggle component", () => {
  it("should render the component", () => {
    render(<ThemeToggle />);
    expect(screen.getByTestId("theme-toggle")).toBeVisible();
  });

  it("should change icon on click", async () => {
    render(<ThemeToggle />);

    // Initial theme should be light, so theme-dark should be visible
    expect(screen.getByTestId("theme-dark")).toBeVisible();
    expect(screen.queryByTestId("theme-light")).toBeNull();

    act(() => {
      screen.getByTestId("theme-toggle").click();
    });

    // Upon theme toggle, theme-light should now be visible
    expect(screen.getByTestId("theme-light")).toBeVisible();
    expect(screen.queryByTestId("theme-dark")).toBeNull();
  });
});
