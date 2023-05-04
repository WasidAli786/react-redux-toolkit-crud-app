import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

const TextField = ({
  name,
  label,
  placeText,
  size,
  icon,
  type,
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
        {icon && (
          <InputLeftElement
            pointerEvents="none"
            children={<BiSearch color="gray.300" />}
          />
        )}
        <InputGroup>
          <Input
            size={size ?? "md"}
            placeholder={placeText ?? "Enter text here"}
            type={type ?? "text"}
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
        </InputGroup>
        {errors[name] && (
          <FormErrorMessage>{errors[name].message}</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};

export default TextField;
