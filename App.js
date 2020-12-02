import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import React from "react";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import BottomNav from "./routes/BottomNav";

export default function App() {
  const scheme = useColorScheme();

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <BottomNav />
      </NavigationContainer>
    </AppearanceProvider>
  );
}
