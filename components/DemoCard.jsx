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
  H3,
} from "tamagui";
import { Heart, MapPin, Star } from "@tamagui/lucide-icons";
import { useState } from "react";

// const [isLiked, setIsLiked] = useState(false);

export function DemoCard({ imageUrl, rentCard }) {
  // const onHeartPress = () => {
  //   setIsLiked(!isLiked); // Cambia el estado del like al contrario
  // };
  return (
    <Card elevate size="$4" borderRadius="$6">
      <Image
        alignSelf="center"
        source={{
          width: 350,
          height: 200,
          uri: imageUrl,
        }}
        marginRight="$5"
        borderBottomRightRadius="$6"
      />
      <Card.Header padded>
        <YGroup separator={<Separator />}>
          <YGroup.Item>
            <ListItem
              hoverTheme
              // iconAfter={isLiked ? HeartFilled : Heart}
              // onPress={onHeartPress}
              iconAfter={Heart}
            >
              <Paragraph size="$8" fontWeight="100" left="$-3">
                Royal Palm Heritage
              </Paragraph>
            </ListItem>

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
                <Paragraph color="white" size={"$5"}>
                  Reservar
                </Paragraph>
              </Button>
            </ListItem>
          </YGroup.Item>
        </YGroup>
      </Card.Header>
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
