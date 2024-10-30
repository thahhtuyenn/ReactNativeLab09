import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DemoCrud } from "./src/pages/DemoCrud";
import { AppNavigation } from "./src/navigations/AppNavigation";
import react from 'react'
import { Provider } from "react-redux";
import store from "./src/reduxToolkit/store";
import { AppNavigationSaga } from "./src/navigations/AppNavigationSaga";

export default function App() {
  return (
    <Provider store={store}>
        {/* <AppNavigation /> */}
        <AppNavigationSaga />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
