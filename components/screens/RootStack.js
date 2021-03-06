import * as React from "react";
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
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./login";
import { TypeSignup } from "./userSignup/role";
import { SignupUser } from "./userSignup/SignupUser";
import { SignupUser1 } from "./userSignup/SignupUser1";
import { SignupUser2 } from "./userSignup/SignupUser2";
import { Splashscreen } from "./splashscreen";
import { SP1 } from "./serviceProvider/SP1";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SP2 } from "./serviceProvider/SP2";
import { Drawer1 } from "./Drawer";
import { NavigationContainer } from "@react-navigation/native";
import {SelectedAdoptPet} from './SelectedAdoptPet';
import {AdoptionList} from './AdoptionList'
import { PetProfile } from "./PetProfile";
import { SelectedBreedPet } from "./SelectedBreedPet";
import { PetAccount } from "./PetAccount";
import { PetVaccines } from "./PetVaccines";
import { HistoryVaccines } from "./historyvaccines";
import { VaccinesDescription } from "./vaccinesdescription";
const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();
export const RootStackSCreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "transparent",
      },
      headerTransparent: true,
      headerTitle: "",
      headerLeft: null,
    }}
  >
    <Stack.Screen name="Splahscreen" component={Splashscreen} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Drawer1" component={Drawer1} />
    <Stack.Screen name="typeSignup" component={TypeSignup} />
    <Stack.Screen name="SignupUser" component={SignupUser} />
    <Stack.Screen name="SignupUser1" component={SignupUser1} />
    <Stack.Screen name="SignupUser2" component={SignupUser2} />
    <Stack.Screen name="SP1" component={SP1} />
    <Stack.Screen name="SP2" component={SP2} />
    <Stack.Screen name="PetProfile" component={PetProfile}/>
    <Stack.Screen name="PetAccount" component={PetAccount}/>
    <Stack.Screen name="SelectedAdoptPet" component={SelectedAdoptPet}/>
    <Stack.Screen name="SelectedBreedPet" component={SelectedBreedPet}/>
    <Stack.Screen name="PetVaccine" component={PetVaccines}/>
    <Stack.Screen name="HistoryVaccine" component={HistoryVaccines}/>
    <Stack.Screen name="VaccineDescription" component={VaccinesDescription}/>
    
  </Stack.Navigator>
);
