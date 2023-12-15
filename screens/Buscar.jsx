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
import {
  Font,
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import { useState, useEffect } from "react";
import { getLugares } from "../API/LugaresAPI";
import { DemoCard } from "../components/DemoCard";
import { Separator } from "tamagui";
import ComboBox from "../components/ComboBox";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Buscar({ navigation }) {
  const fonts = {
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
    Rubik_600SemiBold,
  };

  const loadFontsAsync = async () => {
    try {
      // Carga las fuentes de manera asíncrona
      await Font.loadAsync(fonts);
    } catch (error) {
      // console.error("Error al cargar las fuentes:", error);
    }
  };
  loadFontsAsync();

  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    const fetchDatos = async () => {
      const lugaresData = await getLugares();
      setLugares(lugaresData);
    };
    fetchDatos();
  }, []);

  const [categoria, setCategoria] = useState("");
  function actualizarCategoria(newCategoria) {
    setCategoria(newCategoria);
  }

  return (
    <SafeAreaView>
      <ScrollView width={windowWidth}>
        <View width={windowWidth} height={windowHeight} alignSelf="center">
          <Image
            source={{
              uri: "https://cdn.discordapp.com/attachments/1181346648002134116/1182762523821351133/Sin_titulo-2.png?ex=6585e070&is=65736b70&hm=d4927caf1631f037bf00be7c37517aa09f5a70967ed3502f8be5e40e696ed7e1&",
              width: 1,
              height: 300,
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
          <View alignSelf="center" position="absolute" paddingTop="$15">
            <ComboBox callbackCategoria={setCategoria} />
          </View>
          <View
            alignSelf="center"
            position="absolute"
            paddingTop="$5"
            marginTop="$20"
          >
            {lugares
              .filter((lugar) => lugar.categoria === categoria)
              .map((lugar, index) => (
                <DemoCard key={index} lugar={lugar} navigation={navigation} />
              ))}
            <Separator paddingTop="$4" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Buscar;
