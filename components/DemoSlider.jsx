import { Paragraph, Slider, Text, View, styled } from "tamagui";
import { useState } from "react";

const CustomSliderTrack = styled(Slider.Track, {
  backgroundColor: "lightgray",
});

export function DemoSlider({ costo, callbackSetTotal }) {
  const [selectedValue, setSelectedValue] = useState(1);

  function handleSliderChange(props) {
    callbackSetTotal(props * costo);
    setSelectedValue(props);
  }

  return (
    <View alignItems="center">
      <Paragraph size={"$6"} paddingBottom="$5">
        {selectedValue} persona{selectedValue > 1 ? "s" : ""}
      </Paragraph>
      <Slider
        size="$3"
        width={200}
        defaultValue={[1]}
        onValueChange={(value) => {
          handleSliderChange(value);
        }}
        // VARIABLE AQUI
        max={6}
        min={1}
        step={1}
      >
        <CustomSliderTrack>
          <Slider.TrackActive backgroundColor="#8B66E5" borderColor="#8B66E5" />
        </CustomSliderTrack>
        <Slider.Thumb
          circular
          index={0}
          size="$1.5"
          backgroundColor="#8B66E5"
          borderColor="#8B66E5"
        />
      </Slider>
    </View>
  );
}

export default DemoSlider;
