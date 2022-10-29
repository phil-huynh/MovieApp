import { createContext, useContext } from "react";
import { CurrentMovie } from "~/support/services/movies";

export const SelectionContext = createContext<CurrentMovie>({
  id: 0,
  setId: () => {},
})

export const useSelectionContext = () => useContext(SelectionContext)