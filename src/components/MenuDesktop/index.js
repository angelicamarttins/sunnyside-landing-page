import "./style.scss";

import Logo from "../Logo";
import OptionsLink from "../OptionsLink";
import DinamicImg from "../DinamicImg";
import TitleContainer from "../../pageComponents/TitleContainer";

import LogoWhite from "../../assets/images/icons/logoWhite.svg";
import HeaderImg from "../../assets/images/desktop/image-header.jpg";
import ArrowDown from "../../assets/images/icons/icon-arrow-down.svg";

const arrayItem = [
  {
    title: "about",
    href: "https://linkedin.com/in/marttinsangelica",
  },
  {
    title: "services",
    href: "https://angelicamarttins.github.io/portfolio/",
  },
  {
    title: "projects",
    href: "https://https://github.com/angelicamarttins",
  },
  {
    title: "contact",
    href: "https://linkedin.com/in/marttinsangelica",
  },
];

const classNameDesktop = {
  list: "op-link__list-d",
  item: "op-link__list-d__item",
  link: "op-link__list-d__link",
  contact: "op-link__list-d__link op-link__list-d__link--contact",
};

const MenuDesktop = () => {
  return (
    <div>
      <div className="menu-desktop">
        <Logo src={LogoWhite} alt="Sunnyside white logo" />

        <OptionsLink
          className={classNameDesktop}
          href={arrayItem}
          target="_blank"
          rel="external"
        />
      </div>

      <div className="title">
        <DinamicImg src={HeaderImg} alt="" />

        <TitleContainer src={ArrowDown} />
      </div>
    </div>
  );
};

export default MenuDesktop;
