import React from "react";
import { Dimensions } from "react-native";
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
  View,
} from "tamagui";
import { Heart, BookmarkPlus } from "@tamagui/lucide-icons";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function DemoCard({ imageUrl, navigation }) {
  const [isLiked, setIsLiked] = useState(false);
  const onHeartPress = () => {
    setIsLiked(!isLiked);
  };
  return (
    <Card elevate size="$3" borderRadius="$6" marginBottom="$3">
      <Image
        marginRight="$5"
        source={{
          width: 1,
          height: 180,
          uri: imageUrl,
        }}
        width={windowWidth - 80}
        borderBottomRightRadius="$6"
        borderTopLeftRadius="$6"
      />
      <Card.Header paddingTop="$2">
        <YGroup separator={<Separator />}>
          <YGroup.Item>
            <ListItem
              hoverTheme
              iconAfter={
                <Heart
                  size="$1.5"
                  color="red"
                  fill="red"
                  fillOpacity={isLiked ? "$1" : "0"}
                />
              }
              onPress={onHeartPress}
            >
              <Paragraph size="$8" left="$-3">
                {/* VARIABLE */}
                Royal Palm Heritage
              </Paragraph>
            </ListItem>

            <ListItem hoverTheme paddingTop="$1">
              <Image
                source={{
                  // Icono map pin
                  uri: "https://cdn.icon-icons.com/icons2/2073/PNG/512/location_map_twitter_icon_127126.png",
                  width: 28,
                  height: 25,
                }}
                left="$-2"
              />
              <Paragraph size={"$5"} left="$-12">
                {/* VARIABLE */}
                Purwokerto, Jateng
              </Paragraph>
            </ListItem>
            <ListItem hoverTheme paddingTop="$1">
              <Image
                source={{
                  // Icono estrella
                  uri: "https://banner2.cleanpng.com/20180411/oqq/kisspng-computer-icons-star-5-star-5acdd9ec67db40.8458493715234401084254.jpg",
                  width: 27,
                  height: 23,
                }}
                left="$-2"
              />
              {/* VARIABLE */}
              <H4 left="$-6">4.5</H4>
              <H6>(4368 reviews)</H6>
            </ListItem>
          </YGroup.Item>
          <YGroup.Item>
            <ListItem hoverTheme>
              {/* VARIABLE */}
              <H2>$245 </H2>
              /noche
              <Button
                marginTop="$2.5"
                borderRadius="$10"
                theme="active"
                backgroundColor={"#8B66E5"}
                onPress={() => navigation.navigate("Detalles")}
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
