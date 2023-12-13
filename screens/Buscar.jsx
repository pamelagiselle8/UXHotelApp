import {
  ScrollView,
  Image,
  View,
  H2,
  H5,
  H6,
  XStack,
  Paragraph,
} from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import ComboBox from "../components/ComboBox";

const windowWidth = Dimensions.get("window").width;

function Buscar() {
  return (
    <SafeAreaView>
      <ScrollView width={windowWidth}>
        <View width={windowWidth} alignSelf="center">
          <Image
            source={{
              uri: "https://cdn.discordapp.com/attachments/1181346648002134116/1182762523821351133/Sin_titulo-2.png?ex=6585e070&is=65736b70&hm=d4927caf1631f037bf00be7c37517aa09f5a70967ed3502f8be5e40e696ed7e1&",
              width: 1,
              height: 230,
            }}
            width={windowWidth}
            borderRadius="$12"
          />
          <H2
            alignSelf="center"
            paddingTop="$6"
            position="absolute"
            color="white"
            fontFamily={"Rubik_700Bold"}
            fontSize={28}
          >
            Encuentra
          </H2>
          <H5
            alignSelf="center"
            paddingTop="$11"
            paddingBottom="$5"
            position="absolute"
            color="mistyrose"
            fontFamily={"Rubik_300Light"}
            fontSize={18}
          >
            EL MEJOR LUGAR
          </H5>
          <View alignItems="center">
            <ComboBox />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Buscar;
