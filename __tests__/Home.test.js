import React from "react";
import { render } from "@testing-library/react-native";

import HomeScreen from "../src/components/Home";
import {
  HOME_CAMERA_SEARCH,
  HOME_CHECK_ALARM,
  HOME_SET_ALARM,
  HOME_TITLE,
  HOME_TYPE_SEARCH,
} from "../src/constants/texts";

it("renders correctly", () => {
  const { getByText } = render(<HomeScreen />);

  getByText(HOME_TITLE);
  getByText(HOME_CAMERA_SEARCH);
  getByText(HOME_TYPE_SEARCH);
  getByText(HOME_SET_ALARM);
  getByText(HOME_CHECK_ALARM);
});
