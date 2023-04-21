import React, { useContext, useRef } from "react";
import { ThemeContext } from "../theme";
import HorizontalMenu from "./horizontal";
import VerticalMenu from "./vertical";
import { useMenu } from "../effects";
import styles from "../style.css";
import { MenuBarProps } from "../typings";
import { MenuClickClickContext } from "../utils";

const MenuBar = ({
  menu,
  focused,
  currentWindow,
  onMenuItemClicked,
}: MenuBarProps) => {
  const {
    platform,
    menu: { style },
  } = useContext(ThemeContext);
  const menuBar = useRef<HTMLDivElement>(null);
  const currentMenu = useMenu(platform, menu);

  return (
    <MenuClickClickContext.Provider value={{ onMenuItemClicked }}>
      <div className={styles.MenuBar} role="menubar" ref={menuBar}>
        {style === "vertical" ? (
          <VerticalMenu
            menu={currentMenu}
            focused={focused}
            currentWindow={currentWindow}
          />
        ) : (
          <HorizontalMenu
            menu={currentMenu}
            menuBar={menuBar}
            focused={focused}
            currentWindow={currentWindow}
          />
        )}
      </div>
    </MenuClickClickContext.Provider>
  );
};

export default MenuBar;
