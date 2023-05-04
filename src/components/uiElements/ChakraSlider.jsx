import React, { useState } from "react";
import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";

const ChakraSlider = ({ sliderValue, setSliderValue }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <>
      <Slider
        id="slider"
        value={sliderValue}
        min={0}
        max={100}
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="white"
          color="black"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue}%`}
          px={2}
          border="1px solid #CBD5E1"
        >
          <SliderThumb boxSize={4}>
            <Box bg="primary.500" h="100%" w="100%" rounded="full" />
          </SliderThumb>
        </Tooltip>
      </Slider>
    </>
  );
};

export default ChakraSlider;
