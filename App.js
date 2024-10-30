import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { DemoCrud } from "./src/pages/DemoCrud";
import { AppNavigation } from "./src/navigations/AppNavigation";
import react from 'react'
import { Provider } from "react-redux";
// import store from "./src/reduxToolkit/store";
import store from "./src/reduxSaga/store"
import { AppNavigationSaga } from "./src/navigations/AppNavigationSaga";
import { AppNavigationRecoil } from "./src/navigations/AppNavigationRecoil";
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    // <Provider store={store}>
    //     {/* <AppNavigation /> */}
    //     {/* <AppNavigationSaga /> */}
    // </Provider>
    <RecoilRoot>
      <AppNavigationRecoil />
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
