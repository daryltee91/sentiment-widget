import { render, screen } from "@testing-library/react";
import { CommentBox } from ".";
import { describe, expect, it } from "vitest";

describe("Comment Box component", () => {
  it("should render the component", () => {
    render(<CommentBox comment="" error="" setComment={() => {}} />);
    expect(screen.getByTestId("comment-box")).toBeVisible();
  });
});
