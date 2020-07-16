import { StatusBar } from "expo-status-bar";
import Axios from "axios";
import { API_URL } from "../constants/API";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import LoginBg from "../../assets/images/LoginBg.jpg";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  contentContainer: {
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontSize: 34,
    height: 34,
    color: "white",
  },
  loginText: {
    marginTop: 12,
    color: "white",
  },
});

export default (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);

  // const loginBtnHandler = () => {
  //   Axios.get(`${API_URL}/users/login`, {
  //     params: {
  //       username,
  //       password,
  //     },
  //   })
  //     .then((res) => {
  //       const {
  //         bio,
  //         fullName,
  //         email,
  //         username,
  //         profilePicture,
  //         id,
  //       } = res.data.result;
  //       AsyncStorage.setItem(
  //         "userData",
  // JSON.stringify({
  //   bio,
  //   fullName,
  //   email,
  //   username,
  //   profilePicture,
  //   id,
  // })
  //       )
  //         .then(() => {
  //           dispatch({
  //             type: "USER_LOGIN",
  //             payload: { bio, fullName, email, username, profilePicture, id },
  //           });
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const loginBtnHandler = () => {
    AsyncStorage.setItem("userData", username)
      .then(() => {
        dispatch({
          type: "USER_LOGIN",
          payload: { username },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ImageBackground source={LoginBg} style={{ ...styles.bgImage }}>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "black",
          opacity: 0.5,
        }}
      />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior="padding"
          style={{ justifyContent: "center", flex: 1 }}
        >
          <View style={{ ...styles.contentContainer }}>
            <Text style={{ ...styles.welcomeText }}>TomatoApp</Text>
            <Text style={{ ...styles.loginText }}>Please enter your name</Text>
            <View
              style={{
                borderRadius: 22,
                paddingVertical: 11,
                paddingHorizontal: 20,
                justifyContent: "center",
                marginTop: 58,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  opacity: 0.8,
                  borderRadius: 22,
                  ...StyleSheet.absoluteFillObject,
                }}
              />
              <TextInput
                autoCapitalize="none"
                placeholderTextColor="black"
                style={{
                  fontSize: 17,
                  color: "black",
                  lineHeight: 19,
                }}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            </View>

            <View
              style={{
                borderRadius: 22,
                paddingVertical: 11,
                paddingHorizontal: 20,
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "#fcd12a",
                  opacity: 0.8,
                  borderRadius: 50,
                  ...StyleSheet.absoluteFillObject,
                }}
              />
              <Button title="Enter" onPress={loginBtnHandler} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
