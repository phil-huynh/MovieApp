import { describe, expect, it } from "vitest";
import DefaultLayout from "./default";
import { render } from "@testing-library/react";

describe("Default Layout", () => {
  it("the title is visible", () => {
    const { getByText } = render(<DefaultLayout />);

    expect(getByText("Trending Movies")).toBeInTheDocument();
  });
});
