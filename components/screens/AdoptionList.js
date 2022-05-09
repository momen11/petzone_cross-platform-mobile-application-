import React, { useState, useEffect } from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import { Searchbar } from "react-native-paper";
import { Adoption } from "./Adoption";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
//import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";

export const AdoptionList = ({navigation}) => {
  //const [datainfo, Setdatainfo] = useState([]);
  const datainfo = [
    {petName:"charlie" , petType: "cat",petGender:"male",petBreed:"persian" ,petage:'10' ,petWeight:'56' , petColor:"white",   petProfilePic:"https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg"},
  {petName: "leo" ,petType: "dog"  ,petGender:"male",petBreed:"pug"  ,petage:'15'  ,petWeight:'72' ,  petColor:"fawn",    petProfilePic: "https://media.istockphoto.com/photos/pug-sitting-and-panting-1-year-old-isolated-on-white-picture-id450709593?k=20&m=450709593&s=612x612&w=0&h=82zzJc3Cz39B6LyrQ_N2b4zXxYzZIEH9aNDZWzrZspg="},
  {petName:"simba"  ,petType: "dog",petGender:"male",petBreed:"Labrador Retriever"  ,petage:'10'  ,petWeight:'40', petColor:"black"  ,  petProfilePic:"https://elevageduverger.ca/wp-content/uploads/2019/12/Mel-and-Jak-24_square.jpg"},
  {petName:"luna" ,petType: "dog",petGender:"female",petBreed:"Maltipoo"  ,petage:'20'  ,petWeight:'96'  , petColor:"brown" , petProfilePic:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F02%2F23%2Fmaltipoo-on-table-390083464-2000.jpg"},
   {petName: "lola" ,petType:"cat" ,petGender:"female" ,petBreed:"Siberian"  ,petage:'8'  ,petWeight:'48' ,  petColor:"white" ,  petProfilePic:"https://cf.ltkcdn.net/cats/images/orig/246623-1877x1251-siberian-cat.jpg"}
  ];
  /*useEffect(() => {
    axios
      .get("http://192.168.1.13:3000/api/v1/offerAdoption")
      .then((res) => {
        Setdatainfo(res.data.adoptedOffer);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);*/

  function getfilter() {
    axios
      .get("http://192.168.1.13:3000/api/v1/offerAdoption" + url, {
        headers: {
          Cookie: "cookie1=value; cookie2=value; cookie3=value;",
          Authorization: "Bearer my-token",
        },
        withCredentials: true,
      })
      .then((res) => {
        Setdatainfo(res.data.adoptedOffer);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  const [petType, setpetType] = useState("");
  const [petGender,setpetGender] = useState("");
  const [petColor,setpetColor] = useState("");
  const [value, setValue] = useState(null);
  const [label, setlabel] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [value1, setValue1] = useState(null);
  const [label1, setlabel1] = useState("");
  const [isFocus1, setIsFocus1] = useState(false);
  const [value2, setValue2] = useState(null);
  const [label2, setlabel2] = useState("");
  const [isFocus2, setIsFocus2] = useState(false);
  const [url, seturl] = useState("");
  const [shouldShow, setShouldShow] = useState(true);
  const[isfull,setisfull]=useState(false)
  const[isselected,setisselected]=useState(false)
  function filterTypeDog() {
    setpetType("dog")
    seturl("?petType=dog");
    setisfull(true)
    getfilter();
  }
  function filterTypeCat() {
    setpetType("cat")
    seturl("?petType=cat");
    setisfull(true)
    getfilter();
  }
 
 function filter(){
  setShouldShow(false)
  //setisselected(false)
 }
function Apply(){
   var string = ''
   var string1= ''
   var string2= ''
  {petColor==""?null:isfull==false?string='?petColor='+petColor:isfull==true?string='&petColor='+petColor:null
  petGender==""?null:isfull==false&&petColor==""?string1='?petGender='+petGender:string1='&petGender='+petGender}

  string2 = url+string+string1
  console.log(string2)
  axios
  .get("http://192.168.1.13:3000/api/v1/offerAdoption" + string2, {
    headers: {
      Cookie: "cookie1=value; cookie2=value; cookie3=value;",
      Authorization: "Bearer my-token",
    },
    withCredentials: true,
  })
  .then((res) => {
    Setdatainfo(res.data.adoptedOffer);
  })
  .catch((err) => {
    console.log(err.response.data);
  });
  setShouldShow(true)//navigate to adoptionlist

}
 const data = [
  { label:'male', value: '1' },
  { label:'female', value: '2' },
];
  const data1 = [
  { label1:'black', value1: '1' },
  { label1:'white', value1: '2' },
  { label1:'brown', value1: '3' },
  { label1:'gray', value1: '4' },
  { label1:'yellow', value1: '5' },
  { label1:'blue', value1: '6' },
  { label1:'pink', value1: '7' },
  { label1:'golden', value1: '8' },
  { label1:'orange', value1: '9' },
  { label1:'silver', value1: '10' },
];
/*function selectpet(){
  //setisselected(true)
  
  navigation.navigate('SelectedPet')
}*/

  return ( 
   <>
   {shouldShow?
  (
<SafeAreaView style ={styles.container1}>
<View style={styles.header1}>
        <Text style={styles.textheader1}>Adoption</Text>
      </View>
      <Text style={styles.txt}>Types</Text>
      <View style={styles.types}>
        <TouchableOpacity style={styles.type1} onPress={filterTypeDog}>
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://icons.veryicon.com/png/o/animal/pet-icon/dog-24.png",
            }}
          />
          <Text style={styles.txt1}>Dogs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.type2} onPress={filterTypeCat}>
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1818/1818401.png",
            }}
          />
          <Text style={styles.txt1}>Cats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.type3}
          onPress={() => setpetType("bird")}
        >
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3069/3069114.png",
            }}
          />
          <Text style={styles.txt1}>Birds</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.type4}
          onPress={() => setpetType("hamster")}
        >
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://cdn-icons.flaticon.com/png/512/1959/premium/1959947.png?token=exp=1645157925~hmac=3f0bebc2efdacae2e4dd214daa211ef0",
            }}
          />
          <Text style={styles.txt2}>Hamsters</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.type5}
          onPress={() => setpetType("rabbit")}
        >
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/802/802389.png",
            }}
          />
          <Text style={styles.txt3}>Rabbits</Text>
        </TouchableOpacity>
      </View>
      <Ionicons
        style={styles.icon}
        name="filter"
        size={24}
        color="black"
        onPress={filter}
      />
      <View style={styles.container1}>
        <FlatList
          data={datainfo}
          renderItem={({ item }) => {
            return  <Card style={styles.card} onPress={()=>{navigation.navigate('SelectedAdoptPet',{id:item._id})}}>
            <Card.Cover
              key={item.petName}
              style={styles.cover}
              source={{ uri: item.petProfilePic }}
            />
            <Text style={styles.title}>  {item.petName}</Text>
            <Text style={styles.title1}> Age: {item.petage}</Text>
            <Text style={styles.title1}>Type: {item.petType}</Text>
            </Card>
          }}
          keyExtractor={(item) => item._id}
         
          contentContainerStyle={{ padding: 10 }}
        />
      </View>
    </SafeAreaView>
    ): <SafeAreaView style ={styles.container}>
    <View style={styles.header}>
   <Text style={styles.textheader}>Filter</Text>
   </View>
           <Dropdown
             style={[styles.dropdown, isFocus ]}
             placeholderStyle={styles.placeholderStyle}
             data={data}
             maxHeight={100}
             labelField="label"
             valueField="value"
             placeholder={!isFocus ? ' Select Gender' : '...'}
             value={value}
             onFocus={() => setIsFocus(true)}
             onBlur={() => setIsFocus(false)}
             onChange={item => {
               setValue(item.value);
               setlabel(item.label);
               setpetGender(item.label);
               setIsFocus(false);
             }}
     />
        <Dropdown
             style={[styles.dropdown1, isFocus1 ]}
             placeholderStyle={styles.placeholderStyle}
             selectedTextStyle={styles.selectedTextStyle}
             data={data1}
             maxHeight={100}
             paddingTop={50}
             labelField="label1"
             valueField="value1"
             placeholder={!isFocus1 ? ' Select Color' : '...'}
             value={value1}
             onFocus={() => setIsFocus1(true)}
             onBlur={() => setIsFocus1(false)}
             onChange={item => {
               setValue1(item.value1);
               setlabel1(item.label1);
               setpetColor(item.label1);
               setIsFocus1(false);
             }}
     />
     <TouchableOpacity style = {styles.buttoncontainer1} onPress={Apply}>
     <Text style = {styles.buttontext1}>Apply</Text>
     </TouchableOpacity>
     </SafeAreaView>  
}

   
</>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor:"rgba(253,239,197,1)", 
  },
  container1:{
    flex: 1,
    marginTop: 30,
    backgroundColor: "white",
  },
  txt: {
    color: "#325288",
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  types: {
    width: 50,
    height: 65,
    flexDirection: "row",
  },
  type1: {
    backgroundColor:"rgba(253,239,197,1)",
    marginLeft: 10,
    top: 10,
    borderRadius: 5,
  },
  type2: {
    backgroundColor:"rgba(253,239,197,1)",
    marginLeft: 20,
    top: 10,
    borderRadius: 5,
  },
  type3: {
    backgroundColor:"rgba(253,239,197,1)",
    marginLeft: 20,
    top: 10,
    borderRadius: 5,
  },
  type4: {
    backgroundColor:"rgba(253,239,197,1)",
    marginLeft: 20,
    top: 10,
    borderRadius: 5,
  },
  type5: {
    backgroundColor:"rgba(253,239,197,1)",
    marginLeft: 20,
    top: 10,
    borderRadius: 5,
  },
  txt1: {
    color: "#325288",
    marginLeft: 15,
    marginTop: 20,
    fontSize: 12,
    fontWeight: "bold",
  },
  txt2: {
    color: "#325288",
    marginLeft: 4,
    marginTop: 20,
    fontSize: 11,
    fontWeight: "bold",
  },
  txt3: {
    color: "#325288",
    marginLeft: 8,
    marginTop: 20,
    fontSize: 12,
    fontWeight: "bold",
  },
  imagestyle: {
    width: 60,
    height: 50,
    marginLeft: 2,
    top: 7,
    resizeMode: "contain",
  },
  header: {
    backgroundColor: "#ED7354",
    height: 100,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  header1: {
    backgroundColor:"rgba(253,239,197,1)",
    height: 100,
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
  icon: {
    marginLeft: 370,
    marginTop: 50,
  },
  search: {
    marginRight: 6,
    marginLeft: 7,
  },
  scroll: {
    flexDirection: "row",
    height: 100,
  },
  textheader:{
    marginTop:30,
    fontSize:30,
    color:"white",
    fontWeight:"bold"
  },
    buttoncontainer1: {
      borderRadius: 15,
      width: 160,
      height: 45,
      backgroundColor: "#ED7354",
      paddingTop: 1,
      justifyContent: 'center',
      marginTop: 350,
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
    dropdown: {
        height: 40,
        width:170,
        marginLeft:18,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        top:160,
        backgroundColor:"white",
       justifyContent: 'space-between',
        paddingHorizontal: 12,
      },
        dropdown1: {
        height: 40,
        width:170,
        marginLeft:230,
        top:120,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        backgroundColor:"white",
        paddingHorizontal: 12,
      },
      card: {
        backgroundColor: "white",
        marginBottom: 30,
        marginLeft: "2%",
        width: "96%",
        height: 118,
        borderColor:"white",
        borderRadius:15,
        //borderStartWidth:2,
        shadowColor: "#000",
     shadowOffset: {
	   width: 0,
   	height: 2,
    },
shadowOpacity: 0.25,
shadowRadius: 4.84,
elevation: 5,

      },
      cover: {
        width: "30%",
        height: 118,
        padding: 0,
        backgroundColor: "rgb(250, 219, 216)",
        borderRadius:10,
        elevation: 5,
      },
      title: {
        paddingBottom: 10,
        marginLeft: 115,
        bottom: 110,
        fontWeight: "bold",
        fontSize: 16,
        color:"#5C7A95"
      },
      title1: {
        paddingBottom: 10,
        marginLeft: 130,
        bottom: 110,
        fontSize: 16,
        color:"#5C7A95"
      },
      con3:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'white',
      },
      buttoncontainer3: {
        borderRadius: 15,
        width: 150,
        height: 45,
        backgroundColor: 'rgb(221,74,72)',
        paddingTop: 1,
        justifyContent: 'center',
        marginTop: 60,
        paddingLeft: 60,
      },
      buttontext3: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        right: 30,
      },
});
