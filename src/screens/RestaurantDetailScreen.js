import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import LoginBg from "../../assets/images/LoginBg.jpg";
import { Icon } from "native-base";

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
    fontSize: 25,
    height: 34,
    color: "white",
  },
  loginText: {
    marginTop: 12,
    color: "white",
    marginBottom: 12,
  },
});

export default (props) => {
  var rating = [];

  const { restaurantDetailData } = props.route.params;

  for (let i = 0; i < restaurantDetailData.rating; i++) {
    rating.push(
      <Icon type="AntDesign" name="star" style={{ color: "#fcd12a" }} />
    );
  }

  return (
    <ImageBackground source={LoginBg} style={{ ...styles.bgImage }}>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "black",
          opacity: 0.5,
        }}
      />
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Image
          source={{
            uri: restaurantDetailData.image,
          }}
          style={{
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
            width: 300,
            height: 300,
            marginTop: 10,
            marginBottom: 15,
          }}
        />
      </View>

      <View style={{ ...styles.contentContainer }}>
        <Text style={{ ...styles.welcomeText }}>
          {restaurantDetailData.restaurantName}
        </Text>
        <Text style={{ ...styles.loginText }}>
          {restaurantDetailData.address}
        </Text>
        <View style={{ flexDirection: "row" }}>{rating}</View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginTop: 10, marginRight: 20 }}>
            <Text style={{ color: "white" }}>Cuisines</Text>
            <Text style={{ color: "white" }}>Open</Text>
            <Text style={{ color: "white" }}>Cost for 2</Text>
          </View>
          <View style={{ marginTop: 10, marginRight: 20 }}>
            <Text style={{ color: "white" }}>
              {restaurantDetailData.cuisine}
            </Text>
            <Text style={{ color: "white" }}>
              {" "}
              {restaurantDetailData.openTime} AM -{" "}
              {restaurantDetailData.closeTime} PM
            </Text>
            <Text style={{ color: "white" }}>
              {restaurantDetailData.currency}. {restaurantDetailData.costForTwo}
            </Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};
