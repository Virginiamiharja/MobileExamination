import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/RestaurantDetailScreen";
import { useDispatch, useSelector } from "react-redux";

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default () => {
  const userSelector = useSelector((state) => state.user);

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name="Home"
        options={{ title: userSelector.username }}
      />
      <Stack.Screen
        component={DetailScreen}
        name="Detail"
        options={{ title: userSelector.restaurant }}
      />
    </Stack.Navigator>
  );
};
