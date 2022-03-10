import React from "react";
import { render } from "@testing-library/react-native";

import MyAlarm from "../src/components/MyAlarm";
import { MYALARM_TITLE } from "../src/constants/texts";

it("renders correctly", () => {
  const { getByText } = render(<MyAlarm />);

  getByText(MYALARM_TITLE);
});
