import { XGroup, ListItem, H1, Paragraph, YGroup } from "tamagui";
import { Dimensions } from "react-native";
import {
  Wifi,
  Tv2,
  ShowerHead,
  Coffee,
  BedDouble,
  Bike,
  Cat,
} from "@tamagui/lucide-icons";

function getIcono(icono, sizeIcono) {
  switch (icono) {
    case 1:
      return (
        <Wifi
          size={sizeIcono}
          color="$color.blue10Light"
          backgroundColor="$backgroundTransparent"
        />
      );
    case 2:
      return (
        <Cat
          size={sizeIcono}
          color="$color.purple10Light"
          backgroundColor="$backgroundTransparent"
        />
      );
    case 3:
      return (
        <Tv2
          size={sizeIcono}
          color="red"
          backgroundColor="$backgroundTransparent"
        />
      );
    case 4:
      return (
        <Bike
          size={sizeIcono}
          color="$color.green10Light"
          backgroundColor="$backgroundTransparent"
        />
      );
    case 5:
      return (
        <Coffee
          size="$3"
          color="$color.orange10Dark"
          backgroundColor="$backgroundTransparent"
        />
      );
    case 6: {
      return (
        <ShowerHead
          size={sizeIcono}
          color="red"
          backgroundColor="$backgroundTransparent"
        />
      );
    }
    case 7: {
      // voy
      return (
        <BedDouble
          size={sizeIcono}
          color="$pink10"
          backgroundColor="$backgroundTransparent"
        />
      );
    }
    default:
      break;
  }
}

function getDescripcion(icono) {
  switch (icono) {
    case 1:
      return "Wifi";
    case 2:
      return "Pet Friendly";
    case 3:
      return "Netflix";
    case 4:
      return "Ciclismo";
    case 5:
      return "Desayuno";
    case 6:
      return "Agua caliente";
    case 7:
      return "King-Size";
    default:
      break;
  }
}

export function Servicios(props) {
  let sizeIcono = "$3";
  return (
    <XGroup alignSelf="center" paddingTop="$4">
      {props.icons.map((element, index) => (
        <YGroup alignItems="center">
          <ListItem
            alignContent="center"
            width="$7"
            backgroundColor={"$backgroundTransparent"}
          >
            {getIcono(element, sizeIcono)}
          </ListItem>
          <ListItem
            textAlign="center"
            width="$12"
            backgroundColor={"$backgroundTransparent"}
          >
            {getDescripcion(element)}
          </ListItem>
        </YGroup>
      ))}
    </XGroup>
  );
}

export default Servicios;
