import React, { useState, useEffect } from "react";
import { View, Alert, Dimensions, Image } from "react-native";
import { Input, Label, Switch, Button, H2, H5 } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  useFonts,
  Rubik_300Light,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";
import { hola } from "../API/Usuarios_Api";
import { ComprobarUsuario } from "../API/Usuarios_Api";

const windowWidth = Dimensions.get("window").width;
const windowheight = Dimensions.get("window").height;

export function Ingreso({ navigation }) {
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_700Bold,
  });

  // Estados para los datos de entrada
  const [email, setCorreo] = useState("");
  const [password, setContrasena] = useState("");

  useEffect(() => {
    const fetch_Datos = async () => {
      const datos = await hola();
      // console.log(datos);
    };
    fetch_Datos();
  }, []);

  const handleCorreoChange = (text) => {
    setCorreo(text);
  };

  const handleContrasenaChange = (text) => {
    setContrasena(text);
  };



  const mandarUsuario2 = async () => {
    const datosUsuario = {
      email,
      password,
    };
    console.log("antes de entro");
    const resultadoAPI = await ComprobarUsuario(datosUsuario);
    console.log("entro");
    if (resultadoAPI) {
      Alert.alert("Registro exitoso");
      navigation.navigate("BottomMenu");
    } else {
      Alert.alert("Error en Inicio");
    }
  };

  const handleIniciarSesion = () => {
    mandarUsuario2();
  };
  const handleIniciarSesion1 = () => {
    // Muestra una alerta con los valores de los campos
   
    navigation.navigate("Registro", { navigation: navigation });

    // Puedes realizar otras acciones según sea necesario
    // navigation.navigate("BottomMenu", { navigation: navigation });
  };
  return (
    <SafeAreaView>
      <View width={windowWidth} alignSelf="center">
        <Image
          source={{
            uri: "https://img.freepik.com/fotos-premium/fondo-gris-claro-liso-liso_8087-1190.jpg",
          }}
          width={windowWidth}
          height={windowheight}
        />
        <Image
          source={{
            uri: "https://cdn.discordapp.com/attachments/1181346648002134116/1182762523821351133/Sin_titulo-2.png?ex=6585e070&is=65736b70&hm=d4927caf1631f037bf00be7c37517aa09f5a70967ed3502f8be5e40e696ed7e1&",
            width: 400,
            height: 200,
          }}
          width={windowWidth}
          position="absolute"
        />

        <H2
          alignSelf="center"
          paddingTop="$11"
          position="absolute"
          color="white"
          fontFamily={"Rubik_700Bold"}
          fontSize={45}
        >
          Inicio de Sesión
        </H2>
        <H5
          alignSelf="center"
          paddingTop="$15"
          // paddingBottom="$5"
          position="absolute"
          color="white"
          fontFamily={"Rubik_300Light"}
          fontSize={25}
        >
          ¡Bienvenido de vuelta!
        </H5>
      </View>

      <View position="absolute" paddingTop="90%" alignSelf="center">
        <Label htmlFor="correo" fontSize={17}>
          Correo
        </Label>
        <Input
          id="correo"
          defaultValue=""
          onChangeText={handleCorreoChange}
          width={"$20"}
        />
        <Label htmlFor="contrasena" fontSize={17}>
          Contraseña
        </Label>
        <Input
          id="contrasena"
          defaultValue=""
          onChangeText={handleContrasenaChange}
          width={"$20"}
        />
        <Label>¿Mantener sesión iniciada?</Label>
        <Switch
          size="$4"
          borderColor={"rgb(113,93,213)"}
         
          
        >
          <Switch.Thumb
            backgroundColor={"rgb(113,93,213)"}
            animation="bouncy"
            borderColor={"rgb(113,93,213)"}
          />
        </Switch>
      </View>

      <View position="absolute" paddingTop="190%" alignSelf="center">
        <Button
          backgroundColor={"rgb(113,93,213)"}
          width={"$20"}
          height={"$6"}
          color="white"
          fontFamily={"Rubik_700Bold"}
          borderRadius={25}
          onPress={handleIniciarSesion}
        >
          Iniciar Sesión
        </Button>
      </View>
      <View position="absolute" paddingTop="220%" alignSelf="center">
        <H5
          alignSelf="center"
          color="black"
          fontFamily={"Rubik_700Bold"}
          fontSize={15}
        >
          ¿No Tienes Una Cuenta?
        </H5>
        <Button
          backgroundColor={"rgb(113,93,213)"}
          width={"$20"}
          height={"$6"}
          color="white"
          fontFamily={"Rubik_700Bold"}
          borderRadius={25}
          onPress={handleIniciarSesion1}
        >
          Registrate
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default Ingreso;
