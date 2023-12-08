import { ScrollView } from "tamagui";
import { DemoCard } from "../components/DemoCard";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function Inicio() {
  return (
    <ScrollView>
      <DemoCard imageUrl="https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg" />
      <DemoCard imageUrl="https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg" />
      <DemoCard imageUrl="https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg" />
    </ScrollView>
  );
}

export default Inicio;
