import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
  TextInput,
  ImageBackground,
} from "react-native";
import Axios from "axios";
import { API_URL } from "../constants/API";
import RestaurantCard from "../screens/RestaurantCard";
import LoginBg from "../../assets/images/LoginBg.jpg";
import { useDispatch, useSelector } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ({ navigation }) => {
  const [restaurantList, setRestaurantList] = useState([]);

  const userSelector = useSelector((state) => state.user);

  useEffect(() => {
    Axios.get(`${API_URL}/restaurants`)
      .then((res) => {
        console.log(res.data);
        setRestaurantList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderRestaurants = ({ item }) => {
    return <RestaurantCard navigation={navigation} data={item} />;
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
      <View style={{ alignItems: "center" }}>
        <FlatList
          // ListHeaderComponent={() => {
          //   return (
          //     <Text style={{ color: "white", marginBottom: 20, fontSize: 30 }}>
          //       Hi, {userSelector.username}!
          //     </Text>
          //   );
          // }}
          ListHeaderComponentStyle={{ marginHorizontal: 15 }}
          contentContainerStyle={{ marginTop: 46 }}
          data={restaurantList}
          renderItem={renderRestaurants}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ImageBackground>
  );
};
