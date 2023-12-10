import { XGroup, ListItem, H1 } from "tamagui";
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

function getIcono(icono) {
  switch (icono) {
    case 1:
      return (
        <ListItem width="5" size="$5" icon={Wifi}>
          Wifi
        </ListItem>
      );
    case 2:
      return (
        <ListItem width="5" size="$5" icon={Cat}>
          Pet Friendly
        </ListItem>
      );
    case 3:
      return (
        <ListItem width="5" size="$5" icon={Tv2}>
          Netflix
        </ListItem>
      );
    case 4:
      return (
        <ListItem width="5" size="$5" icon={Bike}>
          Ciclismo
        </ListItem>
      );
    case 5:
      return (
        <ListItem width="5" size="$5" icon={Coffee}>
          Desayuno
        </ListItem>
      );
    case 6: {
      return (
        <ListItem width="5" size="$5" icon={ShowerHead}>
          Agua caliente
        </ListItem>
      );
    }
    case 7: {
      return (
        <ListItem width="5" size="$5" icon={BedDouble}>
          King-size
        </ListItem>
      );
    }
    default:
      break;
  }
}

export function Servicios(props) {
  return (
    <XGroup alignSelf="center">
      {props.icons.map((element, index) => (
        <XGroup.Item key={index}>{getIcono(element)}</XGroup.Item>
      ))}
    </XGroup>
  );
}

export default Servicios;
