import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainTab from "./src/navigators/MainTab";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider, useDispatch, useSelector } from "react-redux";
import reducers from "./src/redux/reducers";
import AsyncStorage from "@react-native-community/async-storage";
import RootNavigator from "./src/navigators/RootNavigator";

const Stack = createStackNavigator();

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

// Kalo mau install apapun di expo pake expo install bukan npm install
// expo login
// git clone
// expo install
// expo start
// push github
// expo publish (appnya bakal ada di account expo kita trs nanti org lain bisa akses lewat link)
// kumpulinnya nanti 1 link github 1 link expo
