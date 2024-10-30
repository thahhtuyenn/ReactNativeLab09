import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StartScreen } from "../pages/recoil/StartScreen";
import { ListTodoScreen } from "../pages/recoil/ListTodoScreen";
import { AddToDoScreen } from "../pages/recoil/AddToDoScreen";

const Stack = createStackNavigator();

export const AppNavigationRecoil = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: {flex: 1} }}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="ListTodoScreen" component={ListTodoScreen} />
        <Stack.Screen name="AddToDoScreen" component={AddToDoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
