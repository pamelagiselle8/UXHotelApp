import React, { useState, useEffect } from "react";
import { View, Alert, Dimensions, Image, ScrollView } from "react-native";
import { Input, Label, Switch, Button, H2, H5 } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Rubik_300Light,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";
import { registrarUsuario } from "../API/Usuarios_Api";

const windowWidth = Dimensions.get("window").width;
const windowheight = Dimensions.get("window").height;

export function Registro({ navigation }) {
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_700Bold,
  });

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [userName, setUsuario] = useState("");
  const [email, setCorreo] = useState("");
  const [password, setContrasena] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  useEffect(() => {
    const fetch_Datos = async () => {
      // No estás usando 'hola' aquí, puedes omitir esta parte si no la necesitas
      // const datos = await hola();
      // console.log(datos);
    };
    fetch_Datos();
  }, []);

  const handleNombreChange = (text) => {
    setNombre(text);
  };

  const handleApellidoChange = (text) => {
    setApellido(text);
  };

  const handleUsuarioChange = (text) => {
    setUsuario(text);
  };

  const handleCorreoChange = (text) => {
    setCorreo(text);
  };

  const handleContrasenaChange = (text) => {
    setContrasena(text);
  };

  const handleAceptaTerminosChange = () => {
    setAceptaTerminos(!aceptaTerminos);
  };

  const mandarUsuario = async () => {
    const datosUsuario = {
      nombre,
      apellido,
      userName,
      email,
      password,
    };
    console.log("antes de entro");
    const resultadoAPI = await registrarUsuario(datosUsuario);
    console.log("entro");
    if (resultadoAPI) {
      Alert.alert("Registro exitoso");
      navigation.navigate("Ingreso");
    } else {
      Alert.alert("Error en el registro");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView width={windowWidth}>
        <View width={windowWidth} alignSelf="center">
          <Image
            source={{
              uri: "https://img.freepik.com/fotos-premium/fondo-gris-claro-liso-liso_8087-1190.jpg",
            }}
            height={windowheight + 250}
            // position="absolute"
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
            fontSize={55}
          >
            Registro
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
            Bienvenido!!
          </H5>
        </View>

        <View position="absolute" paddingTop="75%" alignSelf="center">
          <Label htmlFor="name" fontSize={17}>
            Nombre
          </Label>
          <Input id="name" defaultValue="" onChangeText={handleNombreChange} />
          <Label htmlFor="name" fontSize={17}>
            Apellido
          </Label>
          <Input
            id="name"
            defaultValue=""
            onChangeText={handleApellidoChange}
          />
          <Label htmlFor="name" fontSize={17}>
            Usuario
          </Label>
          <Input id="name" defaultValue="" onChangeText={handleUsuarioChange} />
          <Label htmlFor="name" fontSize={17}>
            Correo
          </Label>
          <Input id="name" defaultValue="" onChangeText={handleCorreoChange} />
          <Label htmlFor="name" fontSize={17}>
            Contraseña
          </Label>
          <Input
            id="name"
            defaultValue=""
            onChangeText={handleContrasenaChange}
          />
          <Label>Aceptas Nuestros Terminos Y Condiciones?</Label>
          <Switch
            size="$4"
            borderColor={"rgb(113,93,213)"}
            onValueChange={handleAceptaTerminosChange}
            value={aceptaTerminos}
          >
            <Switch.Thumb animation="bouncy" borderColor={"rgb(113,93,213)"} />
          </Switch>
          <Button
            marginTop="$4"
            backgroundColor={"rgb(113,93,213)"}
            width="$20"
            height="$6"
            color="white"
            fontFamily={"Rubik_700Bold"}
            borderRadius={25}
            onPress={mandarUsuario}
          >
            Registrarse
          </Button>
        </View>

        <View paddingTop="65%" alignSelf="center"></View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Registro;
