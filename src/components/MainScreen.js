import React from "react";
import { useNav } from "../context/NavContext";
import { MenuCarousel } from "./Carousel/MenuCarousel";
import { handleToggleMenu } from "../helpers/handleToggleMenu";

export const MainScreen = ({ dataScreen }) => {
  const {  isActive, setNavState } = useNav();
  const { background, icon, menu } = dataScreen;
  
  return (
    <div className="highlights__highlights_container">
      <div
        className="highlights__title_container"
        style={{ backgroundImage: `url(assets/${background}.jpeg)` }}
      >
        <div className="highlights__aside" />
        <div
          className={`highlights__title_box ${ isActive && 'highlights_active' }`}
          onClick={() => handleToggleMenu(isActive, setNavState) }
        >
          <i className={`${ icon }`} />
        </div>
        <div
          className={`highlights__aside ${ isActive && 'aside_active' }`}
        />
      </div>
      { menu.length && <MenuCarousel menu={menu} /> }
    </div>
  );
};
