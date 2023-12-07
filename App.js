import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { StyleSheet } from "react-native";
// import { ChevronRight, Cloud, Moon, Star, Sun } from "@tamagui/lucide-icons";
import { DemoCard } from "./components/DemoCard";
import DemoAvatar from "./components/DemoAvatar";
import { Rubik_400Regular } from "@expo-google-fonts/rubik";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <ScrollView marginTop="$7">
        <YStack alignSelf="center" alignItems="center">
          <DemoAvatar imageUrl="https://i.pinimg.com/474x/75/ec/e9/75ece9442868b3374dd1a51e16feeaf4.jpg" />
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          {/* <H3>Heading 3</H3>
        <H4>Heading 4</H4>
        <H5>Heading 5</H5>
        <H6>Heading 6</H6> */}
          <Heading>Heading</Heading>
          <Separator paddingBottom="$5" />
          <DemoCard imageUrl="https://i.pinimg.com/474x/75/ec/e9/75ece9442868b3374dd1a51e16feeaf4.jpg" />

          <Separator paddingBottom="$5" />
          <DemoCard
            imageUrl="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?fit=2500%2C1666"
            rentCard={true}
          />
          <Separator paddingBottom="$5" />
          <DemoCard
            imageUrl="https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg"
            rentCard={true}
          />

          <Separator paddingBottom="$5" />
        </YStack>
      </ScrollView>
    </TamaguiProvider>
  );
}

import {
  ScrollView,
  AlertDialog,
  Button,
  ListItem,
  Separator,
  XStack,
  YStack,
  YGroup,
  Card,
  Paragraph,
  Image,
  Avatar,
  Heading,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from "tamagui";
