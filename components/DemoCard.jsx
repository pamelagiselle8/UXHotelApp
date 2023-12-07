// card.jsx
import React from "react";
import {
  Card,
  H2,
  H4,
  H5,
  H6,
  Paragraph,
  XStack,
  Button,
  Image,
  Separator,
  Label,
  YGroup,
  ListItem,
} from "tamagui";
import { Heart, MapPin, Star } from "@tamagui/lucide-icons";

export function DemoCard({ imageUrl, rentCard }) {
  return (
    <Card elevate size="$3" borderRadius="$6">
      {/* <Button
        icon={Heart}
        width="$3"
        height="$3"
        paddingLeft="$20"
        marginLeft="$15"
        backgroundColor="rgba(52, 52, 52, 0.0)"
      /> */}
      <Image
        alignSelf="center"
        source={{
          width: 350,
          height: 200,
          uri: imageUrl,
        }}
        // marginTop="$5"
        marginRight="$5"
        borderBottomRightRadius="$6"
        // borderRadius="$6"
      />
      <Card.Header padded>
        <Paragraph size="$8" fontWeight="100">
          Royal Palm Heritage
        </Paragraph>
        {/* <Button
          icon={<MapPin size="$1" />}
          width={"$1"}
          height={"$1"}
          backgroundColor="rgba(52, 52, 52, 0.0)"
        ></Button>
        <Paragraph theme="alt2">Royal</Paragraph> */}
        <YGroup separator={<Separator />}>
          <YGroup.Item>
            <ListItem hoverTheme icon={MapPin}>
              <Paragraph size={"$5"} left="$-16">
                Purwokerto, Jateng
              </Paragraph>
            </ListItem>
            <ListItem hoverTheme icon={Star}>
              <H4 left="$-12">4.5</H4>
              <H6>(4368 reviews)</H6>
            </ListItem>
          </YGroup.Item>
          <YGroup.Item>
            <ListItem hoverTheme>
              <H2>$245 </H2>
              /noche
              <Button
                marginTop="$2.5"
                borderRadius="$10"
                theme="active"
                backgroundColor={"#8B66E5"}
                color={"#F0F2F6"}
              >
                Reservar
              </Button>
            </ListItem>
          </YGroup.Item>
        </YGroup>
      </Card.Header>

      {/* <Card.Footer padded>
        <XStack flex={1} />
        <Button
          borderRadius="$10"
          theme="active"
          backgroundColor={"#8B66E5"}
          color={"#F0F2F6"}
        >
          Reservar
        </Button>
      </Card.Footer> */}
    </Card>
  );
}

// export function DemoCard({ imageUrl, rentCard }) {
//   if (rentCard) {
//     return (
//       <Card elevate size="$5" borderRadius="$6">
//         <Image
//           resizeMode="contain"
//           alignSelf="center"
//           source={{
//             width: 350,
//             height: 200,
//             uri: imageUrl,
//           }}
//           // marginTop="$5"
//           borderRadius="$6"
//         />
//         <Card.Header padded>
//           <H2>Hotel</H2>
//           <Paragraph theme="alt2">Disponible</Paragraph>
//         </Card.Header>
//         <Card.Footer padded>
//           <XStack flex={1} />
//           <Button borderRadius="$10">Comprar</Button>
//         </Card.Footer>
//       </Card>
//     );
//   }
//   return (
//     <Card elevate size="$6" borderRadius="$6">
//       <Card.Header padded>
//         <H2>Sony A7IV</H2>
//         <Paragraph theme="alt2">Now available</Paragraph>
//       </Card.Header>
//       <Card.Footer padded>
//         <XStack flex={1} />
//         <Button borderRadius="$10">Purchase</Button>
//       </Card.Footer>
//       <Card.Background>
//         <Image
//           resizeMode="contain"
//           alignSelf="center"
//           source={{
//             width: 500,
//             height: 300,
//             uri: imageUrl,
//           }}
//         />
//       </Card.Background>
//     </Card>
//   );
// }
