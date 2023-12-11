import {
  ScrollView,
  Image,
  View,
  H3,
  H4,
  H6,
  XStack,
  Paragraph,
  Button,
} from "tamagui";
import { Dimensions } from "react-native";
import Servicios from "../components/Servicios";
import { DemoCard } from "../components/DemoCard";
import DateChooser from "../components/DateChooser";
import DemoForm from "../components/DemoForm";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function DetalleLugar() {
  return (
    <ScrollView width={windowWidth}>
      <View
        width={windowWidth}
        alignSelf="center"
        position="absolute"
        paddingTop="$3"
      >
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
          paddingTop="$8"
          position="absolute"
          color="white"
          fontStyle="b"
        >
          Royal Palm Heritage
        </H3>
      </View>

      <View paddingTop="$12">
        <Image
          source={{
            uri: "https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg",
            width: 100,
            height: 250,
          }}
          width={windowWidth - 50}
          borderRadius="$10"
          marginTop="$3"
          alignSelf="center"
        />

        <H4 fontStyle="b" alignSelf="left" paddingLeft="$4" paddingTop="$4">
          Información
        </H4>
        <Servicios icons={[1, 5, 2]} />

        <H4 fontStyle="b" alignSelf="left" paddingTop="$4" paddingLeft="$4">
          Ubicación
        </H4>
        <Paragraph alignSelf="left" paddingTop="$2" paddingHorizontal="$4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Paragraph>
      </View>

      <XStack alignSelf="center" paddingVertical="$2">
        <View alignSelf="left" alignItems="center" paddingRight="$6">
          <H6 paddingTop="$4">Entrada</H6>
          <DateChooser />
        </View>
        <View alignSelf="right" alignItems="center">
          <H6 paddingTop="$4">Salida</H6>
          <DateChooser />
        </View>
      </XStack>

      <Button
        marginTop="$2.5"
        borderRadius="$10"
        theme="active"
        backgroundColor={"#8B66E5"}
        width="$12"
      >
        <Paragraph color="white" size={"$5"}>
          Ir a pagar
        </Paragraph>
      </Button>

      <DemoForm />
    </ScrollView>
  );
}

export default DetalleLugar;
