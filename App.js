import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { ImageComponent, SafeAreaView, StyleSheet } from "react-native";
// import { ChevronRight, Cloud, Moon, Star, Sun } from "@tamagui/lucide-icons";
import { DemoCard } from "./components/DemoCard";
import DemoAvatar from "./components/DemoAvatar";
import { DemoTab } from "./components/DemoTab";
import { GroupDemo } from "./components/DemoGroup";

import { Rubik_400Regular } from "@expo-google-fonts/rubik";

export default function App() {
  return (
    <SafeAreaView alignSelf="center" alignItems="center">
      <TamaguiProvider config={config}>
        <DemoTab />
      </TamaguiProvider>
    </SafeAreaView>
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
