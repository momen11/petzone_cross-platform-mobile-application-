import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Switch,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ImageBackground,
  TouchableRipple,
} from 'react-native';
import axios from "axios";
import Svg, { Ellipse } from 'react-native-svg';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { PetList } from './PetList';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


export const SelectedAdoptPet = ({route,navigation}) => {
const [petinfo, Setpetinfo] = useState([]);
const{id}=route.params
const datainfo = [
  {petName:"charlie" , petType: "cat",petGender:"male",petBreed:"persian" ,petage:'10' ,petWeight:'56' , petColor:"white",   petProfilePic:"https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg"},
{petName: "leo" ,petType: "dog"  ,petGender:"male",petBreed:"pug"  ,petage:'15'  ,petWeight:'72' ,  petColor:"fawn",    petProfilePic: "https://media.istockphoto.com/photos/pug-sitting-and-panting-1-year-old-isolated-on-white-picture-id450709593?k=20&m=450709593&s=612x612&w=0&h=82zzJc3Cz39B6LyrQ_N2b4zXxYzZIEH9aNDZWzrZspg="},
{petName:"simba"  ,petType: "dog", petGender:"male",petBreed:"Labrador Retriever"  ,petage:'6'  ,petWeight:'40', petColor:"black"  ,  petProfilePic:"https://elevageduverger.ca/wp-content/uploads/2019/12/Mel-and-Jak-24_square.jpg"},
{petName:"luna" ,petType: "dog",petGender:"female",petBreed:"Maltipoo"  ,petage:'20'  ,petWeight:'96'  , petColor:"brown" , petProfilePic:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F02%2F23%2Fmaltipoo-on-table-390083464-2000.jpg"},
 {petName: "lola" ,petType:"cat", petGender:"female",petBreed:"Siberian"  ,petage:'8'  ,petWeight:'48' ,  petColor:"white" ,  petProfilePic:"https://cf.ltkcdn.net/cats/images/orig/246623-1877x1251-siberian-cat.jpg"}
];
  const [image, SetImage] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg'
  );
useEffect(() => {
    axios
      .get("http://192.168.1.13:3000/api/v1/offerAdoption",id)
      .then((res) => {
        Setpetinfo(res.data.adoptedOffer);
      })
      .catch((err) => {
        console.log(err);
      });
  }, id);

function Adopt(){
  console.log(id)
  axios
  .post("", id, {
    headers: {
      Cookie: "cookie1=value; cookie2=value; cookie3=value;",
      "Content-Type": "application/json",
      "My-Custom-Header": "foobar",
    },
    withCredentials: true,
  })
  .then((res) => {
    navigation.navigate('HomeDrawer')
  })
  .catch((err) => {
    console.log(err.response.data);
  });
  
}

return (
   <SafeAreaView>
     
       <View style={styles.header}>
         

        <Image
                source={{ uri: image }}
                resizeMode="stretch"
                style={styles.avatar}></Image>
                <Text  style={styles.title0}> Gabaski</Text>

<Text style = {styles.title1}>  Gender: {datainfo.petGender}</Text>
<Text style = {styles.title2}>  Type: {datainfo.petType}</Text>
          <View style={styles.veiwcard}>
 
         <Card  style={styles.card} onPress={()=>{console.log("hhhh")}}>
    
     
      <Text style = {styles.title}>Age: {datainfo.petage}</Text>
    </Card>

     <Card  style={styles.card} onPress={()=>{console.log("hhhh")}}>
    
      
      <Text style = {styles.title}>Gender: {datainfo.petGender}</Text>
    </Card>
           </View>
           <Text style = {styles.title3}>  Age: {datainfo.petage}</Text>
<Text style = {styles.title4}>  Breed: {datainfo.petBreed}</Text>
 <View style={styles.veiwcard2}>
         <Card  style={styles.card} onPress={()=>{console.log("hhhh")}}>
    
     
      <Text style = {styles.title}>Breed: {datainfo.petBreed}</Text>
    </Card>

     <Card  style={styles.card} onPress={()=>{console.log("hhhh")}}>
    
     
      <Text style = {styles.title}>Type: {datainfo.petType}</Text>
    </Card>
           </View>
          
       
        <Text  style = {styles.descrptiontitle }> Descrption </Text>
        <Text style = {styles.descrption}>Despite my dog leaning on me each time we meet other big dogs in the street, I am certain his/her lean nature is an advantage when I am not present</Text>

       </View>
       <TouchableOpacity style = {styles.buttoncontainer1} onPress={Adopt}>
     <Text style = {styles.buttontext1}>Adopt</Text>
     </TouchableOpacity>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({

header: {
    backgroundColor: "#FDEFC5",
    height: 120,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    
  },
textheader: {
    marginTop: 30,
    fontSize: 30,
    color: "rgb(221,74,72)",
    fontWeight: "bold",
  },
 avatar: {
    width: 110,
    height: 120,
    borderRadius: 100,
    justifyContent: 'center',
     left: 0,
      top: 50,
  },
veiwcard: {
flexDirection:"row",
top:-55,
left:-15,

},
veiwcard2: {
flexDirection:"row",
top:-115,
left:-15,

},
   icon1: {
    position: "absolute",
    top: 28,
    left: 315,
  },
card:{backgroundColor:"white",marginBottom:20, marginLeft:"7%",width:"43%",height:40,borderColor:"white",borderRadius:15,top:125,
 shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
 },
 switch1:{
   top:-114,
   paddingBottom:0,
   left:-105,
   
 },
 switchtext:{
   top:-150,
   paddingBottom:0,
   left:-35,
    paddingLeft:15,
 },
 title0:{
fontSize:25,
fontWeight:"bold",
left:-5,
top:50
 },
 descrptiontitle:{
fontSize:20,
color:"black",
fontWeight:"bold",
left:-140,
marginBottom:5,
top:40,
 },
 descrption:{
fontSize:17,
color:"black",
top:40,
//fontWeight:"bold",
//left:-125,
//marginBottom:5,
 },
 buttoncontainer1: {
  borderRadius: 15,
  width: 160,
  height: 45,
  backgroundColor: "#ED7354",
  paddingTop: 1,
  justifyContent: 'center',
  top: 520,
  marginLeft:130,
  paddingLeft: 60,
},
buttontext1: {
  textAlign: 'center',
  color: 'white',
  fontSize: 20,
  right: 30,
  fontWeight:'bold'
},
 title:{ fontWeight:"bold", fontSize:15, color:"gray",left:45,top:5,},

title1:{paddingBottom:0, left:60,top:120, fontWeight:"bold", fontSize:13,color:"black"},

 title2:{paddingBottom:25, left:60,top:185, fontWeight:"bold",marginBottom:15, fontSize:13,color:"black"},

 title3:{paddingBottom:0, left:-140,top:-20, fontWeight:"bold", fontSize:13,color:"black"},

 title4:{paddingBottom:25, left:-145,top:40, fontWeight:"bold",marginBottom:15, fontSize:13,color:"black"},
});