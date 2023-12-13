import { Heading, H2, H5, ScrollView, View, Image, Separator } from "tamagui";
import { DemoCard } from "../components/DemoCard";
import { Dimensions, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { useEffect } from "react";
import { Input, Label, Switch, XStack, YStack ,Checkbox} from 'tamagui'
import { hola } from "../API/Usuarios_Api";
import { Check } from '@tamagui/lucide-icons'
import {
  useFonts,
  Rubik_300Light,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";
// import { getHospedajes } from "../API/APICasas";

const windowWidth = Dimensions.get("window").width;
const windowheight = Dimensions.get("window").height;

export function Registro({ navigation }) {
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_700Bold,
  });
  useEffect(
    ()=>{
      const fetch_Datos=async()=>{
        const datos = await hola();
       // console.log(datos);
      }
      fetch_Datos();
    },[]
  )
  return (
    < SafeAreaView  >
    <Checkbox size="$4" borderColor={"black"}>
    <Checkbox.Indicator>
      <Check />
    </Checkbox.Indicator>
  </Checkbox>
  
    </SafeAreaView>
    
  );
  
}


export default Registro;