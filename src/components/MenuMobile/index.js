import "./MenuMobile.scss";

import OptionsLink from "../OptionsLink";
import Logo from "../Logo";

import WhiteLogo from "../../assets/images/icons/logoWhite.svg";
import Hamburger from "../../assets/images/icons/icon-hamburger.svg";

function MenuMobile(props) {
  const hrefObj = {
    about: "https://linkedin.com/in/marttinsangelica",
    services: "https://angelicamarttins.github.io/portfolio/",
    projects: "https://https://github.com/angelicamarttins",
    contact: "https://linkedin.com/in/marttinsangelica",
  };

  const classNameMobile = {
    list: "op-link__list-m",
    item: "op-link__list-m__item",
    link: "op-link__list-m__link",
    contact: "op-link__list-m__link op-link__list-m__link--contact",
  };

  const classNameDesktop = {
    list: "op-link__list-d",
    item: "op-link__list-d__item",
    link: "op-link__list-d__link",
    contact: "op-link__list-d__link op-link__list-d__link--contact",
  };

  return (
    <div className="menu-mobile">
      <div className="menu-mobile__nav">
        <Logo src={WhiteLogo} />

        <img className="menu-mobile__nav--hamb" src={Hamburger} alt="" />

        <div className="menu-mobile__nav--box">
          <OptionsLink
            className={classNameMobile}
            href={hrefObj}
            target="_blank"
            rel="external"
          />
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;
