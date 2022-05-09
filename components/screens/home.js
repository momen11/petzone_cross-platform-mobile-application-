import * as React from 'react';
import { Text, View, StyleSheet,SafeAreaView,StatusBar,ScrollView,TouchableOpacity } from 'react-native';

export const Home=({navigation})=>{
  /*function Adopt(){
   navigation.navigate('AdoptionList')
  }
  function Breed(){
    navigation.navigate('BreedingList')
   }*/
  return(
  <View style={styles.container1}>
     <TouchableOpacity style={styles.buttoncontainer1} >
        <Text style={styles.buttontext1}>Adoption</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttoncontainer1} >
        <Text style={styles.buttontext1}>Breeding</Text>
      </TouchableOpacity>
 </View>
  );
}

const styles = StyleSheet.create({
container1:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingBottom:50
  },
    buttoncontainer1: {
    borderRadius: 15,
    width: 150,
    height: 45,
    backgroundColor: 'rgb(221,74,72)',
    paddingTop: 1,
    justifyContent: 'center',
    marginTop: 60,
    paddingLeft: 60,
  },
  buttontext1: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    right: 30,
  },
});