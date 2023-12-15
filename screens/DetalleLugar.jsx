import {
  ScrollView,
  Image,
  View,
  H3,
  H4,
  H6,
  XStack,
  Paragraph,
} from "tamagui";
import {
  Font,
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import { Dimensions } from "react-native";
import { useState } from "react";
import Servicios from "../components/Servicios";
import DateChooser from "../components/DateChooser";
import DemoForm from "../components/DemoForm";
import DemoSlider from "../components/DemoSlider";

const windowWidth = Dimensions.get("window").width;

export function DetalleLugar({ route, navigation }) {
  const fonts = {
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
    Rubik_600SemiBold,
  };

  const loadFontsAsync = async () => {
    try {
      // Carga las fuentes de manera asíncrona
      await Font.loadAsync(fonts);
    } catch (error) {
      // console.error("Error al cargar las fuentes:", error);
    }
  };
  loadFontsAsync();

  const { lugar } = route.params;
  let servicios = lugar.servicios;

  function getFechaManana() {
    var fecha = new Date();
    fecha.setDate(fecha.getDate() + 1);
    return fecha;
  }

  const [fechaEntrada, setFechaEntrada] = useState(new Date());
  function actualizarFechaEntrada(newDate) {
    setFechaEntrada(newDate);
  }

  const [fechaSalida, setFechaSalida] = useState(getFechaManana());
  function actualizarFechaSalida(newDate) {
    setFechaSalida(newDate);
  }

  return (
    <ScrollView width={windowWidth}>
      <View width={windowWidth} position="absolute">
        <Image
          source={{
            uri: "https://cdn.discordapp.com/attachments/1181346648002134116/1182762523821351133/Sin_titulo-2.png?ex=6585e070&is=65736b70&hm=d4927caf1631f037bf00be7c37517aa09f5a70967ed3502f8be5e40e696ed7e1&",
            width: 1,
            height: 230,
          }}
          width={windowWidth}
        />
        <H3
          alignSelf="center"
          paddingTop="$4"
          position="absolute"
          color="white"
          fontStyle="b"
        >
          {lugar.nombre}
        </H3>
      </View>

      <View paddingTop="$10">
        <Image
          source={{
            uri: lugar.img,
            width: 100,
            height: 250,
          }}
          width={windowWidth - 50}
          borderRadius="$10"
          marginTop="$3"
          alignSelf="center"
        />

        <H4
          size="$8"
          fontFamily={"Rubik_600SemiBold"}
          paddingLeft="$5"
          paddingTop="$5"
        >
          {/* {servicios.length > 0 ? "Servicios" : ""} */}
          Servicios
        </H4>
        <Servicios icons={servicios} />

        <H4
          size="$8"
          fontFamily={"Rubik_600SemiBold"}
          paddingLeft="$5"
          paddingTop="$5"
        >
          Ubicación
        </H4>
        {/* <Paragraph alignSelf="left" paddingTop="$2" paddingHorizontal="$4"> */}
        <Paragraph
          size="$4"
          fontFamily={"Rubik_400Regular"}
          paddingLeft="$5"
          paddingTop="$2"
        >
          {lugar.ubicacion}
        </Paragraph>
      </View>

      <XStack alignSelf="center" paddingVertical="$2">
        <View alignSelf="left" alignItems="center" paddingRight="$6">
          <H6 size="$4" fontFamily={"Rubik_400Regular"} paddingTop="$4">
            ENTRADA
          </H6>
          <DateChooser
            fechaInicio={new Date()}
            callbackActualizarFecha={actualizarFechaEntrada}
          />
        </View>
        <View alignSelf="right" alignItems="center">
          <H6 size="$4" fontFamily={"Rubik_400Regular"} paddingTop="$4">
            SALIDA
          </H6>
          <DateChooser
            fechaInicio={getFechaManana()}
            callbackActualizarFecha={actualizarFechaSalida}
          />
        </View>
      </XStack>
      <DemoSlider />
      <DemoForm fechaEntrada={fechaEntrada} fechaSalida={fechaSalida} />
    </ScrollView>
  );
}

export default DetalleLugar;
