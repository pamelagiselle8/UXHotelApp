import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { SafeAreaView, Dimensions } from "react-native";
import { DemoTab } from "./components/DemoTab";
// import Rubik from "rubik";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  Rubik_800ExtraBold,
  Rubik_900Black,
  Rubik_300Light_Italic,
  Rubik_400Regular_Italic,
  Rubik_500Medium_Italic,
  Rubik_600SemiBold_Italic,
  Rubik_700Bold_Italic,
  Rubik_800ExtraBold_Italic,
  Rubik_900Black_Italic,
} from "@expo-google-fonts/rubik";
import BottomMenu from "./components/BottomMenu";
import Inicio from "./screens/Inicio";
import DetalleLugar from "./screens/DetalleLugar";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Stack = createStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
    Rubik_900Black,
    Rubik_300Light_Italic,
    Rubik_400Regular_Italic,
    Rubik_500Medium_Italic,
    Rubik_600SemiBold_Italic,
    Rubik_700Bold_Italic,
    Rubik_800ExtraBold_Italic,
    Rubik_900Black_Italic,
  });
  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={BottomMenu}>
          <Stack.Screen
            name="BottomMenu"
            component={BottomMenu}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{ header: () => null }}
          />
          <Stack.Screen name="Detalles" component={DetalleLugar} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Stack.Navigator initialRouteName="BottomMenu">
          <Stack.Screen
            name="BottomMenu"
            component={BottomMenu}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Inicio"
            component={DemoTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Detalles" component={DetalleLugar} />
        </Stack.Navigator> */}
      {/* <BottomMenu /> */}
    </TamaguiProvider>

    // <SafeAreaView alignSelf="center" alignItems="center">
    //   <TamaguiProvider config={config}>
    //     <DemoTab width={windowWidth} height={windowHeight} />
    //   </TamaguiProvider>
    // </SafeAreaView>
  );
};

export default App;
