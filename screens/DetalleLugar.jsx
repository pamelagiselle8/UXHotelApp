import {
  ScrollView,
  Image,
  View,
  Heading,
  H3,
  H2,
  H4,
  Group,
  XGroup,
  YGroup,
  XStack,
  YStack,
  ListItem,
  Separator,
  Button,
  Paragraph,
} from "tamagui";
import {
  Wifi,
  Tv2,
  Tv,
  ShowerHead,
  Coffee,
  BedDouble,
  Bike,
  Cat,
} from "@tamagui/lucide-icons";
import { Dimensions } from "react-native";
import Servicios from "../components/Servicios";
import { DemoCard } from "../components/DemoCard";

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
          // borderRadius="$12"
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
          // borderRadius="$12"
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
    </ScrollView>
  );
}

export default DetalleLugar;
