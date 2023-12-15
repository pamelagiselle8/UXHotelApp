import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Search, User2 } from "@tamagui/lucide-icons";
// Screens
import Inicio from "../screens/Inicio";
import Buscar from "../screens/Buscar";
import Perfil from "../screens/Perfil";

const Tab = createBottomTabNavigator();

function BottomMenu({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#8B66E5",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Home color={focused ? "#8B66E5" : color} size={size} />
          ),
        }}
        name="Inicio"
        component={Inicio}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Search color={focused ? "#8B66E5" : color} size={size} />
          ),
        }}
        name="Buscar"
        component={Buscar}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <User2 color={focused ? "#8B66E5" : color} size={size} />
          ),
        }}
        name="Perfil"
        component={Perfil}
      />
    </Tab.Navigator>
  );
}

export default BottomMenu;
