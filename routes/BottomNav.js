import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Shop from "../screens/Shop";
import Sessions from "../screens/Sessions";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Shop"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Shop") {
            iconName = focused ? "laptop" : "laptop";
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Sessions") {
            iconName = focused
              ? "calendar-month-outline"
              : "calendar-month-outline";
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "For You") {
            iconName = focused ? "person-outline" : "person-outline";
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search";
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === "Bag") {
            iconName = focused ? "shopping-bag" : "shopping-bag";
            return <Feather name={iconName} size={size} color={color} />;
          }

          // You can return any component that you like here!
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: "gray",
        style: { backgroundColor: colors.background },
      }}
    >
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Sessions" component={Sessions} />
      <Tab.Screen name="For You" component={Sessions} />
      <Tab.Screen name="Search" component={Sessions} />
      <Tab.Screen name="Bag" component={Sessions} />
    </Tab.Navigator>
  );
};

export default BottomNav;
