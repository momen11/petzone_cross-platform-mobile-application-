import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import { Searchbar } from "react-native-paper";
import { SelectedPet } from "./SelectedAdoptPet";
export const Adoption = ({ info }) => {
  //console.log(info);
const[isselected,setisselected]=useState(false)
function selectpet(){
  
}
  return (
    <Card style={styles.card} onPress={selectpet}>
    <Card.Cover
      key={info.petName}
      style={styles.cover}
      source={{ uri: info.petProfilePic }}
    />
    <Text style={styles.title}> Name: {info.petName}</Text>
    <Text style={styles.title}> Age: {info.petage}</Text>
    <Text style={styles.title}>Type: {info.petType}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgb(250, 219, 216)",
    marginBottom: 30,
    marginLeft: "2%",
    width: "96%",
    height: 170,
  },
  cover: {
    width: "40%",
    height: 170,
    padding: 2,
    backgroundColor: "rgb(250, 219, 216)",
  },
  title: {
    paddingBottom: 10,
    marginLeft: 200,
    bottom: 160,
    fontWeight: "bold",
    fontSize: 16,
  },
  buttoncontainer1: {
    backgroundColor: "rgb(255, 89, 89)",
    marginLeft: 210,
    marginBottom: -40,
    bottom: 70,
    paddingLeft: 30,
    justifyContent: "center",
    width: 100,
    height: 35,
  },
  buttontext1: {
    fontSize: 17,
    fontWeight: "bold",
    alignContent: "center",
    marginLeft: -3,
  },
});
