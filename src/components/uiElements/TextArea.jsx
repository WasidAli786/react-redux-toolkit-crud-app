import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

const TextArea = ({
  name,
  label,
  placeText,
  size,
  register,
  errors,
  isRequired,
  maximLength,
  minimLength,
}) => {
  return (
    <>
      <FormControl isInvalid={errors[name]}>
        {label && <FormLabel>{label}</FormLabel>}
        <Textarea
          size={size ?? "md"}
          placeholder={placeText ?? "Enter text here"}
          {...register(name, {
            required: {
              value: isRequired === false ? false : true,
              message: "This is required",
            },
            maxLength: {
              value: maximLength,
              message: `Value must be maximum ${maximLength}`,
            },
            minLength: {
              value: minimLength,
              message: `Value must be minimum ${minimLength}`,
            },
          })}
        />
        {errors[name] && (
          <FormErrorMessage>{errors[name].message}</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};

export default TextArea;
