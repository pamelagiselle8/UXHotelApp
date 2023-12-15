import { Heading, H2, H5, ScrollView, View, Image, Separator } from "tamagui";
import { DemoCard } from "../components/DemoCard";
import { Dimensions, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { useEffect } from "react";
import { Input, Label, Switch, XStack, YStack ,Checkbox} from 'tamagui'
import { Button } from 'tamagui'
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
    <SafeAreaView>
    <View width={windowWidth} alignSelf="center" >
    <Image
      source={{
        uri: "https://img.freepik.com/fotos-premium/fondo-gris-claro-liso-liso_8087-1190.jpg",
        width: 1,
        height: windowheight,
      }}
      width={windowWidth}
    />
    <Image
      source={{
        uri: "https://cdn.discordapp.com/attachments/1181346648002134116/1182762523821351133/Sin_titulo-2.png?ex=6585e070&is=65736b70&hm=d4927caf1631f037bf00be7c37517aa09f5a70967ed3502f8be5e40e696ed7e1&",
        width: 1,
        height: 200,
      }}
      width={windowWidth}
      position="absolute"
    />


    <H2
      alignSelf="center"
      paddingTop="$10"
      position="absolute"
      color="white"
      fontFamily={"Rubik_700Bold"}
      fontSize={45}
    >
      Iniciar Sesion
    </H2>
    <H5
      alignSelf="center"
      paddingTop="$14"
      paddingBottom="$5"
      position="absolute"
      color="white"
      fontFamily={"Rubik_300Light"}
      fontSize={25}
    >
      Bienvenido De Vuelta!!
    </H5>
    

    </View>

    <View   position="absolute" paddingTop="90%"  alignSelf="center" width={"$20"} >

    <Label htmlFor="name" fontSize={17}>Correo</Label>
    <Input id="name" defaultValue="" />
    <Label htmlFor="name" fontSize={17} >Contraseña</Label>
    <Input id="name" defaultValue="" />
    <Label>
          No Cerrar Sesion?
        </Label>
        <Switch size="$4" borderColor={'rgb(113,93,213)'} >
          <Switch.Thumb animation="bouncy" borderColor={'rgb(113,93,213)'} />
        </Switch>
    </View>

      <View position="absolute" paddingTop="190%"  alignSelf="center">
      <Button backgroundColor={'rgb(113,93,213)'} width={"$20"} height={"$6"} color="white" fontFamily={"Rubik_700Bold"}  borderRadius={25} paddingBottom="15">
        Iniciar Sesison
        </Button>
      </View>
      <View position="absolute" paddingTop="220%"  alignSelf="center">
          <H5
          alignSelf="center"
          color="black"
          fontFamily={"Rubik_700Bold"}
          fontSize={15}>
          No Tienes Una Cuenta?
        </H5>
            <Button backgroundColor={'rgb(113,93,213)'} width={"$20"} height={"$6"} color="white" fontFamily={"Rubik_700Bold"}  borderRadius={25} >
            Registrate
            </Button>
        </View>

    </SafeAreaView>
    
  );
  
}


export default Registro;