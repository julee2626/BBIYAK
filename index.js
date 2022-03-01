import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import App from "./src/App";
import { name as appName } from "./src/app.json";
import store from "./src/configureStore";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppWrapper);
