import {
  ScrollView,
  Image,
  View,
  Heading,
  XGroup,
  XStack,
  ListItem,
  Separator,
  Button,
} from "tamagui";
import { Activity, Airplay } from "@tamagui/lucide-icons";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function DetalleLugar() {
  return (
    <ScrollView width={windowWidth} paddingTop="$4">
      <View width={windowWidth} alignSelf="center">
        <XGroup size="$10" $gtSm={{ size: "$5" }}>
          <XGroup.Item>
            <ListItem size="$3" icon={Activity}>
              First
            </ListItem>
          </XGroup.Item>
          {/* <XGroup.Item>
            <ListItem size="$3" icon={Airplay}>
              Second
            </ListItem>
          </XGroup.Item> */}
        </XGroup>
      </View>
    </ScrollView>
  );
}

export default DetalleLugar;
