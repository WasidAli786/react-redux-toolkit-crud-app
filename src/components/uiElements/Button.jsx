import React from "react";
import { Button } from "@chakra-ui/react";

const Buttons = ({ title, rightIcon, leftIcon, variant, onClick, type }) => {
  return (
    <>
      <Button
        rightIcon={rightIcon ?? ""}
        leftIcon={leftIcon ?? ""}
        variant={variant ?? "solid"}
        onClick={onClick}
        type={type ?? "button"}
      >
        {title ?? "title"}
      </Button>
    </>
  );
};

export default Buttons;
