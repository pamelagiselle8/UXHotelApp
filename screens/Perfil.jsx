import { Heading, H2, H5, ScrollView, View, Image, Separator } from "tamagui";
import { UserCog, ChevronRight, Moon, Star, Sun } from '@tamagui/lucide-icons'
import { DemoCard } from "../components/DemoCard";
import { Dimensions, Text } from "react-native";
import { Check } from '@tamagui/lucide-icons'
import { Checkbox } from 'tamagui'
import { useEffect } from "react";
import { ListItem, XStack, YGroup } from 'tamagui'
import { SafeAreaView } from "react-native-safe-area-context";
import { CerrarUsuario } from "../API/Usuarios_Api";

import {
  useFonts,
  Rubik_300Light,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";
// import { getHospedajes } from "../API/APICasas";

const windowWidth = Dimensions.get("window").width;

export function Inicio({ navigation }) {
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_700Bold,
  });
  const test = async () => {
    const resultadoAPI = await CerrarUsuario();
    console.log("antes if");
    if (resultadoAPI.success) {
      console.log("despues if");
      navigation.navigate("Ingreso");
    } else {
      Alert.alert("LogOut Error");
    }
  };

  return (
    <SafeAreaView>
    <View></View>
    <View paddingTop="100%">
        <YGroup alignSelf="center" bordered width={"90%"} size="$5" separator={<Separator />}>
        <YGroup.Item >
          <ListItem
            hoverTheme
            pressTheme
            title="Cerrar Sesion"
            subTitle="Subtitle"
            icon={undefined}
            iconAfter={ChevronRight}
            backgroundColor={"white"}
            onPress={test}
          />
        </YGroup.Item>
        </YGroup>
      </View>
    </SafeAreaView>
  );
}

export default Inicio;