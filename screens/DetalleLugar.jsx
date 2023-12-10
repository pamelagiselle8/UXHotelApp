import {
  ScrollView,
  Image,
  View,
  Heading,
  H3,
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
      <View>
        <Image
          source={{
            uri: "https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg",
            width: 1,
            height: 230,
          }}
          width={windowWidth}
          // borderRadius="$12"
          borderTopRightRadius="$12"
          marginTop="$3"
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
