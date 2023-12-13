import React from "react";
import { Dimensions } from "react-native";
import {
  Card,
  H2,
  H4,
  H6,
  Paragraph,
  Button,
  Image,
  Separator,
  YGroup,
  ListItem,
  YStack,
} from "tamagui";
import { Heart } from "@tamagui/lucide-icons";
import { useState } from "react";
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import DetalleLugar from "../screens/DetalleLugar";

const windowWidth = Dimensions.get("window").width;

export function DemoCard({ lugar, navigation }) {
  const [isLiked, setIsLiked] = useState(false);
  const onHeartPress = () => {
    setIsLiked(!isLiked);
  };
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
    Rubik_600SemiBold,
  });
  return (
    <Card elevate borderRadius="$6" marginBottom="$3">
      <Image
        marginRight="$5"
        source={{
          width: 1,
          height: 180,
          uri: lugar.img,
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
              <Paragraph size="$8" left="$-3" fontFamily={"Rubik_600SemiBold"}>
                {lugar.nombre}
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
              <Paragraph
                size={"$5"}
                left="$-12"
                fontFamily={"Rubik_400Regular"}
              >
                {lugar.ubicacion}
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
              <H4 left="$-8" fontFamily={"Rubik_400Regular"}>
                {lugar.estrellas}
              </H4>
              <H6 fontFamily={"Rubik_300Light"}>({lugar.reviews} reviews)</H6>
            </ListItem>
          </YGroup.Item>

          <YGroup.Item>
            <ListItem>
              <YStack alignItems="center" marginTop="$2" marginBottom="$-2">
                <H2 fontFamily={"Rubik_600SemiBold"} size={"$9"}>
                  ${lugar.costo}
                </H2>
                <Paragraph fontFamily={"Rubik_400Regular"} marginLeft={"$-5"}>
                  /noche
                </Paragraph>
              </YStack>

              <Button
                marginTop="$2.5"
                marginBottom="$-2"
                borderRadius="$10"
                theme="active"
                backgroundColor={"#8B66E5"}
                onPress={() =>
                  navigation.navigate("Detalles", { lugar: lugar })
                }
              >
                <Paragraph
                  color="white"
                  size={"$5"}
                  fontFamily={"Rubik_600SemiBold"}
                >
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
