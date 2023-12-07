// card.jsx
import React from "react";
import { Card, H2, Paragraph, XStack, Button, Image, Separator } from "tamagui"; // Importa los componentes necesarios

export function DemoCard({ imageUrl, rentCard }) {
  if (rentCard) {
    return (
      <Card elevate size="$5" borderRadius="$6">
        <Image
          resizeMode="contain"
          alignSelf="center"
          source={{
            width: 350,
            height: 200,
            uri: imageUrl,
          }}
          // marginTop="$5"
          borderRadius="$6"
        />
        <Card.Header padded>
          <H2>Hotel</H2>
          <Paragraph theme="alt2">Disponible</Paragraph>
        </Card.Header>
        <Card.Footer padded>
          <XStack flex={1} />
          <Button borderRadius="$10">Comprar</Button>
        </Card.Footer>
      </Card>
    );
  }
  return (
    <Card elevate size="$6" borderRadius="$6">
      <Card.Header padded>
        <H2>Sony A7IV</H2>
        <Paragraph theme="alt2">Now available</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button borderRadius="$10">Purchase</Button>
      </Card.Footer>
      <Card.Background>
        <Image
          resizeMode="contain"
          alignSelf="center"
          source={{
            width: 500,
            height: 300,
            uri: imageUrl,
          }}
        />
      </Card.Background>
    </Card>
  );
}
