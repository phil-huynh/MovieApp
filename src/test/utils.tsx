import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";

interface RenderWithRouterProps {
  route?: string;
  history?: MemoryHistory;
}

export const renderWithRouter = (
  ui: React.ReactElement,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  }: RenderWithRouterProps = {}
) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    // ...render(ui, { wrapper: BrowserRouter }),
    ...render(
      <Router location={history.location} navigator={history}>
        {ui}
      </Router>
    ),
    history,
  };
};
