import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Shop from "../screens/Shop";
import Sessions from "../screens/Sessions";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="Shop" component={Shop} />
      <Stack.Screen name="Sessions" component={Sessions} />
    </Stack.Navigator>
  );
}
