import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { SafeAreaView } from "react-native";
// import { ChevronRight, Cloud, Moon, Star, Sun } from "@tamagui/lucide-icons";

import { DemoCard } from "./components/DemoCard";
import DemoAvatar from "./components/DemoAvatar";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <YStack alignSelf="center" alignItems="center">
        <DemoAvatar imageUrl="https://i.pinimg.com/474x/75/ec/e9/75ece9442868b3374dd1a51e16feeaf4.jpg" />
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <H4>Heading 4</H4>
        <H5>Heading 5</H5>
        <H6>Heading 6</H6>
        <Heading>Heading</Heading>
        <DemoCard imageUrl="https://i.pinimg.com/474x/75/ec/e9/75ece9442868b3374dd1a51e16feeaf4.jpg" />
      </YStack>
    </TamaguiProvider>
  );
}

import {
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
