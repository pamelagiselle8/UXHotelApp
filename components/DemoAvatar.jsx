import { Avatar } from "tamagui";

export function DemoAvatar({ imageUrl }) {
  return (
    <Avatar circular size="$6">
      <Avatar.Image accessibilityLabel="Nate Wienert" src={imageUrl} />
      <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
    </Avatar>
  );
}

export default DemoAvatar;
