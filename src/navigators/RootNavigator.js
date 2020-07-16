import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainTab from "./MainTab";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider, useDispatch, useSelector } from "react-redux";
import reducers from "../redux/reducers";
import AsyncStorage from "@react-native-community/async-storage";

const Stack = createStackNavigator();

export default function App() {
  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);

  // Keep login function
  useEffect(() => {
    AsyncStorage.getItem("userData")
      .then((storageItem) => {
        if (!storageItem) throw "Item is empty";
        dispatch({
          type: "USER_LOGIN",
          payload: { username: storageItem },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userSelector.username ? (
          <Stack.Screen name="maintab" component={MainTab} />
        ) : (
          <Stack.Screen name="login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
