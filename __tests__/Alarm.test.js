import React from "react";
import { render } from "@testing-library/react-native";

import Alarm from "../src/components/Alarm";
import { ALARM_PLACE_HOLDER, ALARM_TITLE } from "../src/constants/texts";

it("renders correctly", () => {
  const { getByPlaceholderText, getByText } = render(<Alarm />);

  getByText(ALARM_TITLE);
  getByPlaceholderText(ALARM_PLACE_HOLDER);
  getByText("알람 맞추기");
});
