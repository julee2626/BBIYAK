import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";

import DrugInfo from "../src/components/DrugInfo";
import { DRUGINFO_TITLE } from "../src/constants/texts";

const initialState = {
  drug: {
    drugInfo: {
      identificationLetter: null,
      formulation: "",
      shape: "",
      color: "",
      name: null,
    },
  },
};
const mockStore = configureStore();
let store;

it("renders correctly", () => {
  store = mockStore(initialState);
  const { getByText } = render(
    <Provider store={store}>
      <DrugInfo />
    </Provider>,
  );

  getByText(DRUGINFO_TITLE);
  getByText("홈으로");
  getByText("알람 맞추기");
});
