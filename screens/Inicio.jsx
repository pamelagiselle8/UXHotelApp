import { H2, H5, ScrollView, View, Image, Separator } from "tamagui";
import { DemoCard } from "../components/DemoCard";
import { Dimensions } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Rubik_300Light,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";
import { getLugares } from "../API/LugaresAPI";

const windowWidth = Dimensions.get("window").width;

export function Inicio({ navigation }) {
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_700Bold,
  });

  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    const fetchDatos = async () => {
      const lugaresData = await getLugares();
      setLugares(lugaresData);
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
            fontFamily={"Rubik_700Bold"}
          >
            Explora
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
            DESTACADOS
          </H5>
        </View>

        <View alignSelf="center" paddingTop="$15">
          {lugares.map((lugar) => (
            <DemoCard lugar={lugar} navigation={navigation} />
          ))}
          <Separator paddingTop="$4" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Inicio;
