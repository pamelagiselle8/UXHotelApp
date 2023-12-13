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
import { Dimensions, useState } from "react-native";
import Servicios from "../components/Servicios";
import DateChooser from "../components/DateChooser";
import DemoForm from "../components/DemoForm";
import DemoSlider from "../components/DemoSlider";

const windowWidth = Dimensions.get("window").width;

export function DetalleLugar({ route, navigation }) {
  const { lugar } = route.params;
  let servicios = lugar.servicios;

  // const [date, setDate] = useState("");
  // setDate("2023-12-12");

  function actualizarDate(newDate) {
    // setDate(newDate);
    console.log("PAPAYA");
    console.log(newDate);
  }

  function getFechaManana() {
    var fecha = new Date();
    fecha.setDate(fecha.getDate() + 1);
    return fecha;
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

        <H4 fontStyle="b" alignSelf="left" paddingLeft="$4" paddingTop="$4">
          {/* {servicios.length > 0 ? "Servicios" : ""} */}
          Servicios
        </H4>
        <Servicios icons={servicios} />

        <H4 fontStyle="b" alignSelf="left" paddingTop="$4" paddingLeft="$4">
          Ubicación
        </H4>
        <Paragraph alignSelf="left" paddingTop="$2" paddingHorizontal="$4">
          {lugar.ubicacion}
        </Paragraph>
      </View>

      <XStack alignSelf="center" paddingVertical="$2">
        <View alignSelf="left" alignItems="center" paddingRight="$6">
          <H6 paddingTop="$4">Entrada</H6>
          <DateChooser
            fechaInicio={new Date()}
            callbackActualizarDate={actualizarDate}
          />
        </View>
        <View alignSelf="right" alignItems="center">
          <H6 paddingTop="$4">Salida</H6>
          <DateChooser fechaInicio={getFechaManana()} />
        </View>
      </XStack>
      <DemoSlider />
      <DemoForm />
    </ScrollView>
  );
}

export default DetalleLugar;
