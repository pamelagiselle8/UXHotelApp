import { Heading, H2, H5, ScrollView, View, Image } from "tamagui";
import { DemoCard } from "../components/DemoCard";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function Inicio() {
  return (
    <ScrollView>
      <View width={windowWidth} alignSelf="center" position="absolute">
        {/* <DemoAvatar imageUrl="https://dnf8butk8bbsy.cloudfront.net/task_artifact_previews/2afa0cfb-aa7d-4c18-a455-651d37b35809.jpg?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiNWFmNmI1YzIwNzk0Y2Y5MCIsImJ1Y2tldCI6InJ1bndheS11cGxvYWRzLXByb2QiLCJzdGFnZSI6InByb2QiLCJleHAiOjE3MDIxNjY0MDB9.Z9DtLIRvL9UH-emGzo2uxDpxGrWNPtefFTnbIJ2zSzk" /> */}
        <Image
          source={{
            uri: "https://cdn.discordapp.com/attachments/1181346648002134116/1182762523821351133/Sin_titulo-2.png?ex=6585e070&is=65736b70&hm=d4927caf1631f037bf00be7c37517aa09f5a70967ed3502f8be5e40e696ed7e1&",
            width: 1,
            height: 200,
          }}
          width={windowWidth}
          // borderBottomLeftRadius="$10"
          // borderTopLeftRadius="$10"
          borderRadius="$12"
        />
        <H2
          alignSelf="center"
          paddingTop="$6"
          position="absolute"
          color="white"
        >
          Explora
        </H2>
        <H5
          alignSelf="center"
          paddingTop="$11"
          paddingBottom="$5"
          position="absolute"
          color="mistyrose"
        >
          destacados
        </H5>
      </View>

      <View width={windowWidth - 20} alignSelf="center" paddingTop="$15">
        <DemoCard imageUrl="https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg" />
        <DemoCard imageUrl="https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg" />
        <DemoCard imageUrl="https://www.arquitecturaydiseno.es/medio/2023/04/09/habitacion-en-airbnb-matakana-auckland-nueva-zelanda-2_619c6180_230409202116_2000x1335.jpg" />
      </View>
    </ScrollView>
  );
}

export default Inicio;
