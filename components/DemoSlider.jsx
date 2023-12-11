import { H5, Slider, View, styled } from "tamagui";
import { useState } from "react";

const CustomSliderTrack = styled(Slider.Track, {
  //   backgroundColor: "black",
  //   outlineColor: "blue",
  backgroundColor: "red",
});

export function DemoSlider() {
  const [sliderValue, setSliderValue] = useState(1);

  function handleSliderChange(newValue) {
    setSliderValue(newValue);
  }

  return (
    <View paddingVertical="$5" alignItems="center">
      <H5>{sliderValue}</H5>
      <Slider
        size="$3"
        width={200}
        defaultValue={[sliderValue]}
        max={6}
        step={1}
        onChange={(value) => {
          setSliderValue(value);
        }}
      >
        <CustomSliderTrack>
          <Slider.TrackActive />
        </CustomSliderTrack>
        <Slider.Thumb circular index={0} />
      </Slider>
    </View>
  );
}

export default DemoSlider;
