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
} from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo, Ionicons,FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { EvilIcons } from '@expo/vector-icons';
import axios from "axios";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from 'react-native-gesture-handler';
export const ServiceProviderProfile = ({route}) => {
 // const {userid} = route.params
  //console.log("userid1",userid)
  const [user, Setuser] = useState({});
  const [id, Setid] = useState(1);
  const [username, Setname] = useState('Stan Smith');
  const [phone, Setphone] = useState('12345');
  const [email, Setemail] = useState('abc@abc.com');
  const [image, SetImage] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg'
  );
  const [city, Setcity] = useState('cairo');
  const [country, Setcountry] = useState('Egypt');
  const[serviceprovider,setserviceprovider] = useState({});
  const[workdata,setworkdata] = useState({});
  const [rate,setrate] = useState();
  const [start,setstart] = useState();
  const [finish,setfinish] = useState();
  const[userid,setuserid] = useState();
  const[fristday,setfristday]= useState();
  const[secandday,setsecandtday]= useState();
  const[threeday,setthreeday]= useState();
  useEffect(() => {
    console.log("kkkkk") 
    axios
      .get("https://petzone99.herokuapp.com/api/v1/users/me")
      .then((res) => {
        console.log("all",res.data.currentUser);
        setserviceprovider(res.data.currentUser);
        //setworkdata(res.data.data);
        setrate(res.data.currentUser.serviceProvider.ratePerHour);
        setstart(res.data.currentUser.serviceProvider.workingHours.startingHour);
        setfinish(res.data.currentUser.serviceProvider.workingHours.finishingHour);
        //setfristday(res.data.data.workingDays[0].date.substring(0,10));
       // setsecandtday(res.data.data.workingDays[1].date.substring(0,10));
       // setthreeday(res.data.data.workingDays[2].date.substring(0,10));
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //const [vetinfo, Setvetinfo] = useState([]);
  const serviceproviderdetails = serviceprovider;
  console.log("vetdetails",serviceproviderdetails);
  
const [vetinf,setvetinf] = useState(serviceproviderdetails)



const [checkbook,setcheckbook] = useState(true)
const [checkbook1,setcheckbook1] = useState(true)
const [checkbook2,setcheckbook2] = useState(true)

//let numpatient1 = workdata.workingDays[0].numberOfFreeAppointments
//let numpatient2 = workdata.data.workingDays[1].numberOfFreeAppointments
//let numpatient3 = workdata.data.workingDays[2].numberOfFreeAppointments
//console.log(numpatient1)
//console.log(numpatient2)
//console.log(numpatient3)

/*
{
    "currentUser": {
        "POA": {
            "numberOfPets": 0,
            "childPet": []
        },
        "serviceProvider": {
            "workingHours": {
                "startingHour": "11:00",
                "finishingHour": "16:00",
                "maxNumberClients": 4
            },
            "location": {
                "latitude": "29.998149198771234",
                "longitude": "31.168960967448864"
            },
            "type": "Vet",
            "rating": 0,
            "offDays": [
                "Sun",
                "Mon"
            ],
            "ratePerHour": 15,
            "verificationDocuments": [
                ""
            ]
        },
        "_id": "6234b36154e254c11243a539",
        "userName": "Dr James",
        "name": "James",
        "email": "james.dr@gmail.com",
        "profilePicture": "https://res.cloudinary.com/petzone/image/upload/v1658052449/users/user-6234b36154e254c11243a539.jpg",
        "nationalID": "",
        "country": "egypt",
*/


return (
  <SafeAreaView>
    <View style={styles.container}>
    
          <ImageBackground source={require("../assets/background5.png")}  style={styles.image}>
        <View style={styles.userInfo}>
         <Text style={styles.pageName}>vet</Text>
        <TouchableOpacity>
          <Ionicons
            style={styles.icon1}
            name="settings-outline"
            size={30}
            color="black"
          />
        </TouchableOpacity>
            <Image
              source={{ uri: serviceprovider.profilePicture}}
               //source={{ uri:image}}
              //resizeMode="stretch"
              style={styles.avatar}></Image>
            <Text style={styles.userName}>{serviceprovider.userName}</Text>
            <Text style={styles.citycountry}>
              {serviceprovider.city}, {serviceprovider.country}
            </Text>
        </View>
        </ImageBackground>
        <Text style = {styles.title1}>  Consultation Fee</Text>
        <Text style = {styles.title2}>  Working Hours </Text>
        <View style={styles.veiwcard}>

       <Card  style={styles.card} onPress={()=>{}}>
  
   
    <Text style = {styles.title}> {rate} EG </Text>
  </Card>

   <Card  style={styles.card} onPress={()=>{}}>
  
    
    <Text style = {styles.title}> {start} : {finish} </Text>
  </Card>
         </View>
           <Text style = {styles.title3}>  Address:</Text>
        <View style={styles.veiwcard2}>

       <Card  style={styles.card2} onPress={()=>{}}>
  
   
    <Text style = {styles.title}>{<EvilIcons name="location" size={24} color='rgba(237,115,84,1)' />} {serviceproviderdetails.address}</Text>
  </Card>
  </View>

          <View style={styles.container2} >
               <Text style={styles.expanded1}>Personal Details</Text>
               <Card style={styles.mycard}>
                  <View style={styles.cardContent}>
                  

                    <MaterialIcons name="email" size={32}color="white" />
                    <Text style={styles.mytext}> {serviceproviderdetails.email}</Text>


                          </View>
                          </Card>
               
             <Card style={styles.mycard1} >
             <View style={styles.cardContent}>
              <Entypo name="phone" size={32}  color="white"/>
                  <Text style={styles.mytext}>{serviceproviderdetails.phoneNumber}</Text>
               </View>
                  </Card>
              </View>
      
    </View>
     
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
  backgroundColor: 'rgba(253,239,197,1)',
  height:845,

},

text:{
  marginLeft:10,
  right:-15,
  bottom:100,
  flexDirection: 'row',
},
title5:{
  color: 'rgba(237,115,84,1)',
  fontSize: 22,
  fontWeight: 'bold',
  left:-58,
  marginLeft:98,
},

container1: {
  //flexDirection:'row'
 //width: 600,
 // height: 200,
 left:25,
 bottom:-130,
 flex:1,
},
container2: {
  //flexDirection:'row'
 // width: 600,
 // height: 200,
 left:5,
 top:-245,
 //flex:1,
},

ellipse: {
  top: 0,
  left: 0,
  width: 859,
  height: 890,
  position: 'absolute',
},
settingsList: {
  left: 51,
  height: 408,
  position: 'absolute',
  right: 450,
  bottom: 274,
},
account: {
  height: 165,
  marginTop: 15,
  marginLeft: 24,
  marginRight: 24,
},
expanded: {
  color: 'rgba(237,115,84,1)',
  fontSize: 25,
  marginTop: 25,
  fontWeight: 'bold',
   left:105,
},
expanded1: {
  color: 'rgba(237,115,84,1)',
  fontSize: 22,
  marginLeft:10,
  left:92,
  fontWeight: 'bold',
  top:10,
  marginBottom:0,
  paddingBottom:0,
  paddingTop:0,
},
title:{ fontWeight:"bold", fontSize:19,  color: 'rgba(237,115,84,1)',left:15,top:5,},
title1:{paddingBottom:0, left:18,bottom:170, fontWeight:"bold", fontSize:16,color:"#5C7A95"},

title2:{paddingBottom:25, left:219,bottom:195, fontWeight:"bold",marginBottom:15, fontSize:16,color:"#5C7A95"},
title3:{paddingBottom:25, left:140,bottom:230, fontWeight:"bold",marginBottom:15, fontSize:16,color:"#5C7A95"},
title4:{fontWeight:"bold", fontSize:19,  color: 'rgba(237,115,84,1)',left:7,top:5,},
veiwcard: {
flexDirection:"row",
top:-180,
left:-15,

},
veiwcard2: {
//flexDirection:"row",
top:-240,
left:80,

},
veiwcard3: {
flexDirection:"column",
top:90,
left:215,

},
veiwcard4: {
flexDirection:"column",
top:-150,
left:80,

},
veiwcard5: {
flexDirection:"column",
top:-270,
left:350,

},
card:{backgroundColor:"white",marginBottom:20, marginLeft:"7%",width:"43%",height:40,borderColor:"white",borderRadius:15,
shadowColor: "#000",bottom:50,
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
},
card2:{backgroundColor:"white",marginBottom:20, marginLeft:"0%",left:-50,width:"83%",height:50,borderColor:"white",borderRadius:15,
shadowColor: "#000",bottom:20,
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
},
card3:{backgroundColor:"white",marginBottom:40, marginLeft:"3.7%",left:-90,width:"30%",height:40,borderColor:"white",borderRadius:15,
shadowColor: "#000", top:165,
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
},

card31:{backgroundColor:"white",marginBottom:40, marginLeft:"3.7%",left:-90,width:"30%",height:40,borderColor:"white",borderRadius:15,
shadowColor: "#000", top:125,
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
},

card32:{backgroundColor:"white",marginBottom:40, marginLeft:"3.7%",left:-90,width:"30%",height:40,borderColor:"white",borderRadius:15,
shadowColor: "#000", top:85,
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
},
card4:{backgroundColor:"white",marginBottom:40, marginLeft:"3.7%",left:-90,width:"30%",height:40,borderColor:"white",borderRadius:15,
shadowColor: "#000",top:130,
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
},
card5:{backgroundColor:"white",marginBottom:40, marginLeft:"3.7%",left:-90,width:"30%",height:40,borderColor:"white",borderRadius:15,
shadowColor: "#000",top:90,
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
},
card6:{backgroundColor:"white",marginBottom:40, marginLeft:"3.7%",left:-90,width:"30%",height:40,borderColor:"white",borderRadius:15,
shadowColor: "#000",top:50,
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
},
userInfo: {

  top: 75,
  left: 87,
  height: 100,
  position: 'absolute',
  right: 451,
  //flexDirection: 'row',
},
avatar: {
  width: 110,
  height: 120,
  borderRadius: 100,
  justifyContent: 'center',
   left: 58,
    bottom: 10,
},
avatar1: {
  width: 50,
  height: 70,
  borderRadius: 200 / 1,
  borderColor:"white",
  
},
buttoncontainer: {
  borderRadius: 15,
  width: 220,
  height: 40,
 backgroundColor: "rgba(237,115,84,1)",
  paddingTop: 0,
  justifyContent: 'center',
  //marginBottom: 55,
  paddingLeft: 60,
  top: 10,
  left: 10,
  flex: 0,
  marginLeft: 40,
 
},

buttontext: {
  textAlign: 'center',
  color: 'white',
  fontSize: 14,
  right: 30,
  marginTop: 0,
  paddingTop: 0,
},
userName: {
  color: 'black',
  fontWeight:"bold",
  fontSize: 15,
  //top:120,
  marginTop: -200,
  marginLeft: -110,
  top:200,
  left:190
},
citycountry: {
 //bottom:6,
  marginLeft: -80,
  left:160,
  top:200,
  fontSize: 14,
  color:"gray"
  //color: 'rgba(237,115,84,1)',
},

ellipseStack: {
  height: 890,
  marginTop: 43,
  marginLeft: -50,
  marginRight: -449,
},
pageName: {
  color: 'rgba(255,255,255,1)',
  fontSize: 24,
  marginTop: -99,
  marginLeft: 35,
},
mycard: {
  margin: -20,
  marginTop:20,
  top:20,
  paddingBottom:0,
  width: 325,
  paddingLeft: 6,
  marginLeft: 35,
  backgroundColor: "rgba(237,115,84,1)",
 borderRadius:20,

},
mycard1: {
marginTop: 30,
top:20,
  width: 325,
  paddingLeft: 5,
  marginLeft: 35,
  backgroundColor: "rgba(237,115,84,1)",
 borderRadius:20,
},
 mycard2: {
marginTop: 10,
top:20,
  width: 325,
  paddingLeft: 5,
  marginLeft: 20,
  backgroundColor: "rgba(237,115,84,1)",
 borderRadius:20,
},
cardContent: {
  flexDirection: 'row',
  padding: 8,
},
mytext: {
  fontSize: 20,
  marginTop: 3,
  marginLeft: 5,
  color:"white",
  fontWeight:"bold",
},
icon1: {
  position: 'absolute',
  top: -20,
  left: 260,
},
 image: {
     top: -15,
    height: 200,
     width: 410,
    flex: 1,
  justifyContent: "center"
},
imagestyle: {
  width: 40,
  height: 40,
  right: 30,
  top: 130,
 // resizeMode: "contain",
},
imagestyle1: {
  width: 40,
  height: 40,
  right: 30,
  top: 90,
 // resizeMode: "contain",
},
imagestyle2: {
  width: 40,
  height: 40,
  right: 30,
  top: 50,
 // resizeMode: "contain",
},

});
//export default Index;