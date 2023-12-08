import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { SafeAreaView, Dimensions } from "react-native";
import { DemoTab } from "./components/DemoTab";
import { Rubik_400Regular } from "@expo-google-fonts/rubik";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  return (
    <SafeAreaView alignSelf="center" alignItems="center">
      <TamaguiProvider config={config}>
        <DemoTab width={windowWidth} height={windowHeight} />
      </TamaguiProvider>
    </SafeAreaView>
  );
}
