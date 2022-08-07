import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
  ImageBackground,
  TouchableRipple,
} from "react-native";
import { Switch, TextInput } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import Svg, { Ellipse } from "react-native-svg";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
export const CreateReport = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [label, setlabel] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [Category, setCategory] = useState("");
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const data = [{ label: "report", value: "1" }];
  const [userid, setuserid] = useState();
  const [image, setImage] = useState(null);
  AsyncStorage.getItem("userid", (err, result) => {
    setuserid(result);
  });


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

  function report() {
    //alert("report has been successfully submitted");
    navigation.navigate("Drawer1");
    let item = {
      title: title,
      text: body,
      categories: ["report"],
      owner: userid,
    };

    const form = new FormData();
    form.append("photo", {
      name: "a.jpg",
      uri: image,
      type: "image/" + image.slice(-3),
    });
    form.append("title", title);
    form.append("text", body);
    
    form.append("categories",`["report"]`);
    form.append("owner", userid);
    console.log("form",form)

   axios
      .post("https://petzone99.herokuapp.com/api/v1/forums/", form,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res)
        alert("report has been successfully submitted");
        navigation.navigate("Report");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
 <ScrollView styles = {styles.container1}>
        <View style={styles.header1}>
          <Text style={styles.textheader1}>Create Report</Text>
        </View>
        <View style={styles.text}>
          
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
          <TextInput
            style={styles.input}
            label="Enter question title "
            mode="outlined"
            onChangeText={(title) => settitle(title)}
          />
          <TextInput
            style={styles.input1}
            label="Enter question body"
            mode="outlined"
            onChangeText={(body) => setbody(body)}
          />
        
        </View>
          <TouchableOpacity style={styles.buttoncontainer} onPress={report}>
            <Text style={styles.buttontext}>Report</Text>
          </TouchableOpacity>
          
    </ScrollView>
    </>
   
 
  );
};
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    //flexDirection:"row",
    marginTop: 30,
  },
  header1: {
    backgroundColor: "rgba(253,239,197,1)",
    height: 100,
  top:30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  textheader1: {
    marginTop: 30,
    fontSize: 30,
    color: "rgb(221,74,72)",
    fontWeight: "bold",
  },
  text: {
    top: 40,
    left: 10,
  },
  input: {
    top: 40,
    width: 350,
    height: 50,
    top: 40,
    marginLeft: 20,
    marginBottom: 40,
  },
  input1: {
    top: 40,
    width: 350,
    height: 150,
    top: 40,
    marginLeft: 20,
    marginBottom: 30,
  },
  buttoncontainer: {
    borderRadius: 15,
    width: 350,
    height: 50,
    backgroundColor: "#ED7354",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 90,
    paddingLeft: 50,
    marginLeft: 30,
  },
  buttontext: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    right: 30,
    fontWeight: "bold",
  },
  dropdown: {
    height: 40,
    width: 350,
    marginLeft: 11,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    top: 10,
    marginBottom: 40,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
});


const imageUploaderStyles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 200,
    width: 200,
    top: 15,
    left:90,
    backgroundColor: "#efefef",
    position: "relative",
    borderRadius: 0,
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