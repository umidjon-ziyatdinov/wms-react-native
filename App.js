import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePageScreen from "./screens/Homepage/HomePageScreen.js";
import { SCREENS } from "./utils/const.js";
import WarehousingScreen from "./screens/Warehousing/WarehousingDisplayScreen.js";
import { Provider } from "react-redux";
import store from "./store/index.js";

const Stack = createNativeStackNavigator();

export default function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [modal, setModal] = useState({
    open: false,
    item: {},
  });
  const handleChangeText = (value) => {
    setInput(value);
  };

  const handleAddTodo = () => {
    setTodoList((prev) => {
      return [
        ...prev,
        { id: Math.floor(Math.random() * 1000000000), text: input },
      ];
    });
    setInput("");
  };

  const handleOpenModal = (item) => {
    setModal({ ...modal, open: true, item });
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={SCREENS.HOME}
          screenOptions={{
            headerStyle: {
              backgroundColor: "#ffffff",
            },
            headerTintColor: "black",
          }}
        >
          <Stack.Screen
            name={SCREENS.HOME}
            component={HomePageScreen}
            options={{ title: "Home", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name={SCREENS.WAREHOUSING}
            component={WarehousingScreen}
            options={{
              title: "Warehousing",
              headerStyle: {
                justifyContent: "center",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

    //   <View style={styles.container}>
    //  <View style={styles.inputContainer}>
    //   <TodoInput handleChange={handleChangeText} handleAdd={handleAddTodo} value={input}/>
    //  </View>

    //     <View style={styles.goalsConatiner}>
    //       <TodoItem data={todoList} />
    //     </View>

    //     <StatusBar style="auto" />
    //   </View>
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
