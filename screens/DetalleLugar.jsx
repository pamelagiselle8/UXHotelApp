import {
  ScrollView,
  Image,
  View,
  H3,
  H4,
  H6,
  XStack,
  Paragraph,
  Separator,
} from "tamagui";
import { Dimensions } from "react-native";
import { useState } from "react";
import { getFormatedDate } from "react-native-modern-datepicker";
import { useFonts } from "@expo-google-fonts/rubik";

import Servicios from "../components/Servicios";
import DateChooser from "../components/DateChooser";
import DemoForm from "../components/DemoForm";
import DemoSlider from "../components/DemoSlider";

const windowWidth = Dimensions.get("window").width;

export function DetalleLugar({ route }) {
  // Cargar Fonts
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    Regular: require("@expo-google-fonts/rubik/Rubik_400Regular.ttf"),
    Light: require("@expo-google-fonts/rubik/Rubik_300Light.ttf"),
    Medium: require("@expo-google-fonts/rubik/Rubik_500Medium.ttf"),
    Bold: require("@expo-google-fonts/rubik/Rubik_700Bold.ttf"),
    SemiBold: require("@expo-google-fonts/rubik/Rubik_600SemiBold.ttf"),
    ExtraBold: require("@expo-google-fonts/rubik/Rubik_800ExtraBold.ttf"),
  });

  const { lugar } = route.params;
  let servicios = lugar.servicios;

  const [total, setTotal] = useState(lugar.costo);
  function actualizarTotal(nuevoTotal) {
    setTotal(nuevoTotal);
  }

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
          paddingTop="$6"
          position="absolute"
          color="white"
          fontFamily={"SemiBold"}
          size="$9"
        >
          {lugar.nombre}
        </H3>
        <Paragraph
          alignSelf="center"
          paddingTop="$11"
          position="absolute"
          color="white"
          fontFamily={"Regular"}
          size="$6"
        >
          {lugar.categoria}
        </Paragraph>
      </View>

      <View paddingTop="$11">
        <Image
          source={{
            uri: lugar.img,
            width: 100,
            height: 250,
          }}
          width={windowWidth - 50}
          borderRadius="$10"
          marginTop="$10"
          alignSelf="center"
        />

        <H4
          size="$8"
          fontFamily={"SemiBold"}
          alignSelf="center"
          paddingTop="$8"
        >
          Servicios ofrecidos
        </H4>
        <Servicios icons={servicios} />

        <H4 size="$7" fontFamily={"SemiBold"} paddingLeft="$5" paddingTop="$6">
          Ubicación
        </H4>
        <Paragraph
          size="$5"
          fontFamily={"Regular"}
          paddingLeft="$5"
          paddingTop="$2"
        >
          {lugar.ubicacion}
        </Paragraph>
      </View>

      <H4
        size="$7"
        fontFamily={"Medium"}
        paddingLeft="$5"
        paddingBottom="$4"
        paddingTop="$8"
      >
        Fecha de estadía
      </H4>
      <XStack alignSelf="center" paddingBottom="$8">
        <View alignItems="center" paddingRight="$8">
          <H6 size="$5" fontFamily={"Regular"}>
            Entrada
          </H6>
          <DateChooser
            fechaInicio={new Date()}
            callbackActualizarFecha={actualizarFechaEntrada}
          />
        </View>
        <View alignItems="center">
          <H6 size="$6" fontFamily={"Regular"}>
            Salida
          </H6>
          <DateChooser
            fechaInicio={getFechaManana()}
            callbackActualizarFecha={actualizarFechaSalida}
          />
        </View>
      </XStack>
      <H4 size="$7" fontFamily={"Medium"} paddingLeft="$5" paddingBottom="$5">
        Cantidad de personas
      </H4>
      <DemoSlider costo={lugar.costo} callbackSetTotal={setTotal} />
      <H4 alignSelf="center" size="$7" fontFamily={"Medium"} paddingTop="$10">
        Total a pagar
      </H4>
      <H4 alignSelf="center" size="$9" fontFamily={"SemiBold"} paddingTop="$3">
        ${total}
      </H4>
      <Separator paddingBottom="$5" />
      {/* fechaEntrada={fechaEntrada} fechaSalida={fechaSalida} */}
      <DemoForm route={route} fechaEntrada={fechaEntrada} fechaSalida={fechaSalida} idUsuario={1} />
    </ScrollView>
  );
}

export default DetalleLugar;
