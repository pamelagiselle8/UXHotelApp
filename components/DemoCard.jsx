// card.jsx
import React from "react";
import { Card, H2, Paragraph, XStack, Button, Image } from "tamagui"; // Importa los componentes necesarios

export function DemoCard({ imageUrl }) {
  return (
    <Card elevate size="$10">
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
