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
              // iconAfter={Heart}
            >
              <Paragraph size="$8" fontWeight="100" left="$-3">
                Royal Palm Heritage
              </Paragraph>
              <Image
                source={{
                  uri: "https://clipart-library.com/images/RkiMyoycj.png",
                  width: 30,
                  height: 35,
                }}
                top="$1.5"
              />
            </ListItem>

            <ListItem hoverTheme>
              <Image
                source={{
                  uri: "https://cdn.icon-icons.com/icons2/2073/PNG/512/location_map_twitter_icon_127126.png",
                  width: 28,
                  height: 25,
                }}
                left="$-2"
              />
              <Paragraph size={"$5"} left="$-15">
                Purwokerto, Jateng
              </Paragraph>
            </ListItem>
            <ListItem hoverTheme>
              <Image
                source={{
                  uri: "https://banner2.cleanpng.com/20180411/oqq/kisspng-computer-icons-star-5-star-5acdd9ec67db40.8458493715234401084254.jpg",
                  width: 27,
                  height: 23,
                }}
                left="$-2"
              />
              <H4 left="$-9">4.5</H4>
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
