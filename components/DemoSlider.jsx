import { H5, Slider, Text, View, styled } from "tamagui";
import { useState } from "react";

const CustomSliderTrack = styled(Slider.Track, {
  backgroundColor: "lightgray",
});

export function DemoSlider() {
  const [selectedValue, setSelectedValue] = useState(1);

  function handleSliderChange(props) {
    setSelectedValue(props);
  }

  return (
    <View paddingVertical="$5" alignItems="center">
      <H5 paddingBottom="$5">
        {selectedValue} persona{selectedValue > 1 ? "s" : ""}
      </H5>
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
