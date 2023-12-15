
import { Heading, H2, H5, ScrollView, View, Image, Separator } from "tamagui";
import { DemoCard } from "../components/DemoCard";
import { Dimensions, Text } from "react-native";
import { Check } from '@tamagui/lucide-icons'
import { Checkbox } from 'tamagui'
import { useEffect } from "react";
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
  return (
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
        <DemoCard
          navigation={navigation}
          imageUrl="https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg"
        />
        <DemoCard
          navigation={navigation}
          imageUrl="https://forbes.es/wp-content/uploads/2023/05/Airbnb-Negocio_01.jpg?format=webp&width=831&height=467"
        />
        <DemoCard
          navigation={navigation}
          imageUrl="https://media.cntraveler.com/photos/5d112d50c4d7bd806dbc00a4/16%3A9/w_2560%252Cc_limit/airbnb%252520luxe.jpg?format=webp&width=831&height=467"
        />
        <Separator paddingTop="$4" />
      </View> 

    </ScrollView>
  );
}

export default Inicio;
