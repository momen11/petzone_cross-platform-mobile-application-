import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

export const petOwnerRegister = ({ route, navigation }) => {
  const {
    name,
    username,
    phoneNumber,
    email,
    password,
    passwordConfirm,
    nationalID,
    address,
    country,
    city,
    role,
    image,
    
  } = route.params;

  async function signup() {
    let user = {
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      userName: username,
      nationalID: nationalID,
      city: city,
      country: country,
      address: address,
      phoneNumber: phoneNumber,
      profilePicture: image,
      role: role,
    };
    console.warn(user);

    await axios
      .post("http://192.168.1.13:3000/api/v1/users/signup", user, {
        headers: {
          "Content-Type": "application/json",
          "My-Custom-Header": "foobar",
          Authorization: "Bearer my-token",
        },
      })
      .then(function (response) {
        navigation.navigate("Home");
    })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <View style={styles.container2}>
      <TouchableOpacity style={styles.buttoncontainer1} onPress={signup}>
        <Text style={styles.buttontext1}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "rgba(253,239,197,1)",
    marginBottom: 0,
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    color: "black",
    top: 1,
    textAlign: "center",
    fontSize: 20,
    marginTop: 90,
  },
 
  buttoncontainer1: {
    borderRadius: 15,
    width: 150,
    height: 45,
    backgroundColor: "#ED7354",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 60,
    paddingLeft: 60,
  },
  buttontext1: {
    textAlign: "center",
    borderColor: "rgb(48, 71, 94)",
    fontSize: 20,
    right: 30,
    color:'white'
  },
  signuptext: {
    textAlign: "center",
    color: "black",
    fontSize: 18,
    flexDirection: "row",
    marginTop: 20,
  },
});
const imageUploaderStyles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 200,
    width: 200,
    top: 30,
    backgroundColor: "#efefef",
    position: "relative",
    borderRadius: 999,
    overflow: "hidden",
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "lightgray",
    width: "100%",
    height: "25%",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
