import "./style.scss";

import Service from "../Service";

import CherryDesktop from "../../assets/images/desktop/image-graphic-design.jpg";
import CherryMobile from "../../assets/images/mobile/image-graphic-design.jpg";
import TangerineDesktop from "../../assets/images/desktop/image-photography.jpg";
import TangerineMobile from "../../assets/images/mobile/image-photography.jpg";

const Services = () => {
  return (
    <section className="services">
      <Service
        src={CherryDesktop}
        srcSet={CherryMobile}
        alt=""
        media="(max-width: 749px)"
        type="image/jpg"
        title="Graphic Design"
        text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        color="green"
      />

      <Service
        src={TangerineDesktop}
        srcSet={TangerineMobile}
        alt=""
        media="(max-width: 749px)"
        type="image/jpg"
        title="Photography"
        text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        color="blue"
      />
    </section>
  );
};

export default Services;
