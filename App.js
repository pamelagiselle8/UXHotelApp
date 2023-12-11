import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { SafeAreaView, Dimensions } from "react-native";
import { DemoTab } from "./components/DemoTab";
import DetalleLugar from "./screens/DetalleLugar";
import { Rubik_400Regular, Rubik } from "@expo-google-fonts/rubik";
// import Rubik from "rubik";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TamaguiProvider config={config}>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen
            name="Inicio"
            component={DemoTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Detalles" component={DetalleLugar} />
        </Stack.Navigator>
      </TamaguiProvider>
    </NavigationContainer>

    // <SafeAreaView alignSelf="center" alignItems="center">
    //   <TamaguiProvider config={config}>
    //     <DemoTab width={windowWidth} height={windowHeight} />
    //   </TamaguiProvider>
    // </SafeAreaView>
  );
};

export default App;
