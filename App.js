import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LogBox } from "react-native";
// Ignore all log notifications:
LogBox.ignoreAllLogs();

import BottomMenu from "./components/BottomMenu";
import Inicio from "./screens/Inicio";
import DetalleLugar from "./screens/DetalleLugar";

const Stack = createStackNavigator();

const App = () => {
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
    </TamaguiProvider>
  );
};

export default App;
