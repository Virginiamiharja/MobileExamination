import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        style: {
          backgroundColor: "#20242F",
          borderTopWidth: 0,
          paddingTop: 4,
          alignSelf: "center",
          borderRadius: 18,
          position: "absolute",
          bottom: 20,
          left: 30,
          right: 30,
          alignItems: "center",
        },
      }}
    >
      <Tab.Screen name="HOME" component={HomeStack} />
      <Tab.Screen name="PROFILE" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
