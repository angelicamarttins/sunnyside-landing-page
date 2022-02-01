import "./MenuDesktop.scss";

import Logo from "../Logo";
import OptionsLink from "../OptionsLink";
import DinamicImg from "../DinamicImg";
import TitleContainer from "../../pageComponents/TitleContainer/";

import LogoWhite from "../../assets/images/icons/logoWhite.svg";
import HeaderImg from "../../assets/images/desktop/image-header.jpg";
import ArrowDown from "../../assets/images/icons/icon-arrow-down.svg";

const hrefObj = {
  about: "https://linkedin.com/in/marttinsangelica",
  services: "https://angelicamarttins.github.io/portfolio/",
  projects: "https://https://github.com/angelicamarttins",
  contact: "https://linkedin.com/in/marttinsangelica",
};

const MenuDesktop = (props) => {
  return (
    <div>
      <div className="menu-desktop">
        <Logo src={LogoWhite} alt="Sunnyside white logo" />

        <OptionsLink href={hrefObj} target="_blank" rel="external" />
      </div>

      <div className="title">
        <DinamicImg src={HeaderImg} alt="" />

        <TitleContainer src={ArrowDown} />
      </div>
    </div>
  );
}

export default MenuDesktop;
