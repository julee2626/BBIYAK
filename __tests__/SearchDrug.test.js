import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import SearchDrug from "../src/components/SearchDrug";
import {
  SEARCHDRUG_TITLE,
  SEARCHDRUG_PLACEHOLDER_LETTER,
  SEARCHDRUG_PLACEHOLDER_NAME,
} from "../src/constants/texts";
import { ERROR_SEARCH_NO_FILTER } from "../src/constants/messages";

it("renders correctly", () => {
  const { getByPlaceholderText, getAllByText, getByText } = render(
    <SearchDrug />,
  );

  getByText(SEARCHDRUG_TITLE);
  getByPlaceholderText(SEARCHDRUG_PLACEHOLDER_LETTER);
  getByPlaceholderText(SEARCHDRUG_PLACEHOLDER_NAME);
  expect(getAllByText("전체").length).toBe(3);
});

it("shows invalid inputs message", () => {
  const { getByTestId, getByText } = render(<SearchDrug />);

  fireEvent.press(getByTestId("Search.Button"));

  getByText(ERROR_SEARCH_NO_FILTER);
});
