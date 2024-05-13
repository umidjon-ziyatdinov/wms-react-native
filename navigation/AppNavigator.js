// navigation/AppNavigator.js

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePageScreen from "../screens/Homepage/HomePageScreen.js";
import { SCREENS } from "../utils/const.js";
import WarehousingScreen from "../screens/Warehousing/WarehousingDisplayScreen.js";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
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
  );
}
