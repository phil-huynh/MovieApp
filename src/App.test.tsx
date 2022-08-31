import { describe, expect, it } from "vitest";
import App from "./App";
import { screen, waitFor } from "@testing-library/react";
import { renderWithRouter } from "~/test/utils";
//render with route

describe("App", () => {
  it("the root URL should redirect to movies", async () => {
    const rootUrl = "/";
    const moviesUrl = "/movies";
    const { history } = renderWithRouter(<App />, { route: rootUrl });

    expect(history.location.pathname).eql(moviesUrl);
  });
});
