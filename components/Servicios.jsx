import { XGroup, ListItem, H1, Paragraph } from "tamagui";
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
        <ListItem
          width="$5"
          size="$5"
          icon={Wifi}
          color="$color.blue10Light"
          backgroundColor="$backgroundTransparent"
        >
          <Paragraph>Wifi</Paragraph>
        </ListItem>
      );
    case 2:
      return (
        <ListItem
          width="$13"
          size="$5"
          icon={Cat}
          color="$color.purple10Light"
          backgroundColor="$backgroundTransparent"
        >
          <Paragraph>Pet Friendly</Paragraph>
        </ListItem>
      );
    case 3:
      return (
        <ListItem
          width="$13"
          size="$5"
          icon={Tv2}
          color="red"
          backgroundColor="$backgroundTransparent"
        >
          <Paragraph>Netflix</Paragraph>
        </ListItem>
      );
    case 4:
      return (
        <ListItem
          width="$5"
          size="$5"
          icon={Bike}
          color="$color.green10Light"
          backgroundColor="$backgroundTransparent"
        >
          <Paragraph>Ciclismo</Paragraph>
        </ListItem>
      );
    case 5:
      return (
        <ListItem
          width="$5"
          size="$5"
          icon={Coffee}
          color="$color.orange10Dark"
          backgroundColor="$backgroundTransparent"
        >
          <Paragraph>Desayuno</Paragraph>
        </ListItem>
      );
    case 6: {
      return (
        <ListItem
          width="$5"
          size="$5"
          icon={ShowerHead}
          color="red"
          backgroundColor="$backgroundTransparent"
        >
          <Paragraph>Agua caliente</Paragraph>
        </ListItem>
      );
    }
    case 7: {
      return (
        <ListItem
          width="$5"
          size="$5"
          icon={BedDouble}
          color="$pink10"
          backgroundColor="$backgroundTransparent"
        >
          <Paragraph>King-size</Paragraph>
        </ListItem>
      );
    }
    default:
      break;
  }
}

export function Servicios(props) {
  return (
    <XGroup alignSelf="center" left="$-3">
      {props.icons.map((element, index) => (
        <XGroup.Item key={index}>{getIcono(element)}</XGroup.Item>
      ))}
    </XGroup>
  );
}

export default Servicios;
