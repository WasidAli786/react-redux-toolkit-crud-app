import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const ChakraMenu = ({ menuData, title, size }) => {
  return (
    <>
      <Menu>
        <MenuButton size={size ?? "md"}>{title ?? ""}</MenuButton>
        <MenuList>
          {menuData?.map((items, index) => (
            <MenuItem key={index}>{items?.title}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default ChakraMenu;
