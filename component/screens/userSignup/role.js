import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const TypeSignup = ({ route, navigation }) => {
  const role = "";

  const {
    name,
    userName,
    phoneNumber,
    email,
    password,
    passwordConfirm,
    nationalID,
    address,
    country,
    city,
    image,
  } = route.params;

  function confirm() {
    axios({
      method: "post",
      url: "https://petzone99.herokuapp.com/api/v1/users/verifyEmail",
      data: {
        email,
      },
    })
      .then(function (response) {
        navigation.navigate("AccountVerfication",{role:role});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function signup() {
    const form = new FormData();
    form.append("photo", {
      name: "a.jpg",
      uri: image,
      type: "image/" + image.slice(-3),
    });
    form.append("name", name);
    form.append("userName", userName);
    form.append("phoneNumber", phoneNumber);
    form.append("email", email);
    form.append("password", password);
    form.append("passwordConfirm", passwordConfirm);
    form.append("city", city);
    form.append("country", country);
    form.append("role", "pet owner");
    form.append("address", address);
    form.append("nationalID", nationalID);

    console.log(form);
    axios
      .post("https://petzone99.herokuapp.com/api/v1/users/signup", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        let userid = response.data.data.user._id;
        AsyncStorage.setItem("userid", userid);
        confirm();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <View style={styles.container1}>
      <Image
        style={styles.imagestyle1}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        }}
      />
      <View style={styles.user}>
        <TouchableOpacity style={styles.buttoncontainer1} onPress={signup}>
          <Text style={styles.buttontext1}>Signup as user</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.imagestyle}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/4370/4370928.png",
        }}
      />
      <View style={styles.sp}>
        <TouchableOpacity
          style={styles.buttoncontainer1}
          onPress={() =>
            navigation.navigate("SP1", {
              name: name,
              email: email,
              password: password,
              passwordConfirm: passwordConfirm,
              userName: userName,
              nationalID: nationalID,
              city: city,
              country: country,
              address: address,
              phoneNumber: phoneNumber,
              image: image,
              role: "service provider",
            })
          }
        >
          <Text style={styles.buttontext1}>Signup as service provider</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
    backgroundColor: "rgba(253,239,197,1)",
  },
  user: {
    marginRight: 190,
    top: 100,
  },
  imagestyle: {
    width: 200,
    height: 160,
    marginLeft: 200,
    bottom: 160,
    resizeMode: "contain",
  },
  imagestyle1: {
    width: 200,
    height: 160,
    marginRight: 190,
    top: 90,
    resizeMode: "contain",
  },
  sp: {
    marginLeft: 195,
    bottom: 150,
  },
  input1: {
    flexDirection: "row",
  },

  icon1: {
    position: "absolute",
    top: 18,
    left: 5,
  },
  buttoncontainer1: {
    borderRadius: 15,
    width: 180,
    height: 88,
    backgroundColor: "#ED7354",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 2,
    paddingLeft: 60,
  },
  buttontext1: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    right: 30,
  },
});