import React from "react";
import { Dimensions } from "react-native";
import {
  Card,
  H2,
  H4,
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
import { useFonts } from "@expo-google-fonts/rubik";

const windowWidth = Dimensions.get("window").width;

export function DemoCard({ key, lugar, navigation }) {
  // Cargar Fonts
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    Regular: require("@expo-google-fonts/rubik/Rubik_400Regular.ttf"),
    Light: require("@expo-google-fonts/rubik/Rubik_300Light.ttf"),
    Medium: require("@expo-google-fonts/rubik/Rubik_500Medium.ttf"),
    Bold: require("@expo-google-fonts/rubik/Rubik_700Bold.ttf"),
    SemiBold: require("@expo-google-fonts/rubik/Rubik_600SemiBold.ttf"),
    ExtraBold: require("@expo-google-fonts/rubik/Rubik_800ExtraBold.ttf"),
  });

  const [isLiked, setIsLiked] = useState(false);
  const onHeartPress = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Card elevate borderRadius="$6" marginBottom="$3">
      <Image
        marginRight="$5"
        source={{
          width: 1,
          height: 180,
          uri: lugar.img,
        }}
        width={windowWidth - 60}
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
                  onPress={onHeartPress}
                />
              }
              title={
                <Paragraph size="$8" fontFamily={"SemiBold"}>
                  {lugar.nombre}
                </Paragraph>
              }
              subTitle={
                <Paragraph size="$4" fontFamily={"Regular"}>
                  {lugar.categoria}
                </Paragraph>
              }
              paddingBottom="$4"
            />

            <ListItem
              hoverTheme
              paddingTop="$1"
              title={
                <Paragraph size={"$5"} fontFamily={"Regular"}>
                  {lugar.ubicacion}
                </Paragraph>
              }
              icon={
                <Image
                  source={{
                    // Icono map pin
                    uri: "https://cdn.icon-icons.com/icons2/2073/PNG/512/location_map_twitter_icon_127126.png",
                    width: 20,
                    height: 25,
                  }}
                />
              }
            />

            <ListItem
              hoverTheme
              marginTop="$-4"
              title={<H4 fontFamily={"Regular"}>{lugar.estrellas + "    "}</H4>}
              subTitle={
                <Paragraph size="$4" fontFamily={"Light"}>
                  {lugar.reviews + " reviews"}
                </Paragraph>
              }
              icon={
                <Image
                  source={{
                    // Icono estrella
                    uri: "https://banner2.cleanpng.com/20180411/oqq/kisspng-computer-icons-star-5-star-5acdd9ec67db40.8458493715234401084254.jpg",
                    width: 20,
                    height: 20,
                  }}
                />
              }
            />
          </YGroup.Item>

          <YGroup.Item>
            <ListItem>
              <YStack alignItems="center" marginTop="$2" marginBottom="$-2">
                <H2 fontFamily={"SemiBold"} size={"$9"}>
                  ${lugar.costo}
                </H2>
                <Paragraph fontFamily={"Regular"} marginLeft={"$-5"}>
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
                <Paragraph color="white" size={"$5"} fontFamily={"SemiBold"}>
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
