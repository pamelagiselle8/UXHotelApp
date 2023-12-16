import { Avatar } from "tamagui";

export function DemoAvatar({ imageUrl }) {
  return (
    <Avatar circular size="$10">
      <Avatar.Image accessibilityLabel="Nate Wienert" src={imageUrl} />
      <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
    </Avatar>
  );
}

export default DemoAvatar;
