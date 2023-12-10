import {
  ScrollView,
  Image,
  View,
  Heading,
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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function DetalleLugar() {
  return (
    <ScrollView width={windowWidth} paddingTop="$4">
      <View>
        <Servicios icons={[1, 6, 4]} />
      </View>
    </ScrollView>
  );
}

export default DetalleLugar;
