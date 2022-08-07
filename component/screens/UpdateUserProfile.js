import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Constants from "expo-constants";
import { TextInput, Platform } from "react-native";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
export const UpdateUserProfile = ({ navigation }) => {
  const [user, Setuser] = useState({});
  const [id, Setid] = useState(1);
  const [username, Setname] = useState("");
  const [phone, Setphone] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [nid, Setnid] = useState("");
  const [country, Setcountry] = useState("");
  const [city, Setcity] = useState("");
  const [address, Setaddress] = useState("");
  const [image, setImage] = useState(null);
  useEffect(() => {
    axios
      .get("https://petzone99.herokuapp.com/api/v1/users/me")
      .then((res) => {
        Setuser(res.data.currentUser);
        setImage(res.data.currentUser.profilePicture);
        Setaddress(res.data.currentUser.address);
        Setcity(res.data.currentUser.city);
        Setcountry(res.data.currentUser.country);
        Setnid(res.data.currentUser.nationalID);
        Setemail(res.data.currentUser.email);
        Setphone(res.data.currentUser.phoneNumber);
        Setname(res.data.currentUser.name);
        console.log(res.data.currentUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function update() {
    const form = new FormData();
    form.append("photo", {
      name: "a.jpg",
      uri: image,
      type: "image/" + image.slice(-3),
    });
    form.append("name", username);
    form.append("phoneNumber", phone);
    form.append("email", email);
    form.append("country", country);
    form.append("city", city);
    form.append("address", address);

    axios
      .patch("https://petzone99.herokuapp.com/api/v1/users/updateMe", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then(function (response) {
        alert("updated successfully!");
        navigation.navigate("UserProfile");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container2}>
        <View style={styles.con}>
          <Text style={styles.edit}>Edit Profile</Text>
        </View>
        <View style={imageUploaderStyles.container}>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
          <View style={imageUploaderStyles.uploadBtnContainer}>
            <TouchableOpacity
              onPress={addImage}
              style={imageUploaderStyles.uploadBtn}
            >
              <Text>{image ? "Edit" : "Upload"} Image</Text>
              <AntDesign name="camera" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.txtin}>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              value={username}
              placeholder={username}
              onChangeText={(username) => Setname(username)}
              placeholderTextColor="gray"
            />
            <Ionicons
              style={styles.icon1}
              name="people-outline"
              size={24}
              color="gray"
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder={phone}
              value={phone}
              onChangeText={(phone) => Setphone(phone)}
              keyboardType="numeric"
              placeholderTextColor="gray"
            />
            <Feather style={styles.icon1} name="phone" size={24} color="gray" />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder={email}
              value={email}
              onChangeText={(email) => Setemail(email)}
              placeholderTextColor="gray"
            />
            <MaterialCommunityIcons
              style={styles.icon1}
              name="email-outline"
              size={24}
              color="gray"
            />
          </View>

          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder={nid}
              value={nid}
              onChangeText={(Nid) => Setnid(Nid)}
              keyboardType="numeric"
              placeholderTextColor="gray"
            />
            <AntDesign
              style={styles.icon1}
              name="idcard"
              size={24}
              color="gray"
            />
          </View>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder={country}
            value={country}
            onChangeText={(country) => Setcountry(country)}
            placeholderTextColor="gray"
          />
          <Entypo style={styles.icon1} name="flag" size={24} color="gray" />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder={city}
            value={city}
            onChangeText={(city) => Setcity(city)}
            placeholderTextColor="gray"
          />
          <MaterialCommunityIcons
            style={styles.icon1}
            name="city"
            size={24}
            color="gray"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder={address}
            value={address}
            onChangeText={(address) => Setaddress(address)}
            placeholderTextColor="gray"
          />
          <AntDesign style={styles.icon1} name="home" size={24} color="gray" />
        </View>
        <TouchableOpacity style={styles.buttoncontainer1} onPress={update}>
          <Text style={styles.buttontext1}>Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container2: {
    flex: 1,
    color: "black",
    alignItems: "center",
    backgroundColor: "rgba(253,239,197,1)",
    paddingTop: 50,
    paddingBottom: 300,
  },
  con: {
    backgroundColor: "rgba(253,239,197,1)",
    bottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  edit: {
    fontSize: 30,
    paddingTop: 10,
    color: "#084594",
    fontWeight: "bold",
  },
  txtin: {
    marginTop: 20,
  },
  inputtext: {
    borderRadius: 9,
    width: 350,
    height: 50,
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: 35,
    fontSize: 15,
    backgroundColor: "white",
    marginVertical: 10,
    marginRight: -10,
  },
  icon1: {
    position: "absolute",
    top: 23,
    left: 5,
  },
  buttoncontainer1: {
    borderRadius: 15,
    width: 350,
    height: 50,
    backgroundColor: "#ED7354",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 30,
    paddingLeft: 50,
    marginLeft: 10,
  },
  buttontext1: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    right: 30,
    fontWeight: "bold",
  },
});
const imageUploaderStyles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 200,
    width: 200,
    top: 20,
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
