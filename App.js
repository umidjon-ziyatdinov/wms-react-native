import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./store/index.js";
import AppNavigator from "./navigation/AppNavigator.js";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
  },
  goalsConatiner: {
    flex: 5,
  },
});
