import { chakra, Flex } from "@chakra-ui/react";

const NavListStyled = chakra(Flex, {
  baseStyle: {
    listStyle: "none",
    gap: "25px",
    alignItems: "center",
    li: {
      fontSize: "20px",
      fontWeight: 500,
      textTransform: "capitalize",
      transition: "all 0.5s",
      _hover: {
        color: "#3E88F6",
        cursor: "pointer",
      },
    },
  },
});

export { NavListStyled };
