import { H2, H5, ScrollView, View, Image, Separator } from "tamagui";
import { DemoCard } from "../components/DemoCard";
import { Dimensions } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

import { useFonts } from "expo-font";

const windowWidth = Dimensions.get("window").width;

export function Inicio({ navigation }) {
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

  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const response = await axios.get(
          "https://w4sbwwxb-3000.use.devtunnels.ms/getAlojamientos",
          {}
        );
        const lugaresData = response.data;
        // console.log(lugaresData);
        setLugares(lugaresData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDatos();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View width={windowWidth} alignSelf="center" position="absolute">
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
            fontFamily={"ExtraBold"}
          >
            Explora
          </H2>
          <H5
            alignSelf="center"
            paddingTop="$11"
            paddingBottom="$5"
            position="absolute"
            color="mistyrose"
            fontFamily={"Light"}
            fontSize={18}
          >
            DESTACADOS
          </H5>
        </View>

        <View alignSelf="center" paddingTop="$15">
          {lugares.map((lugar, index) => (
            <DemoCard key={index} lugar={lugar} navigation={navigation} />
          ))}
          <Separator paddingTop="$4" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Inicio;
