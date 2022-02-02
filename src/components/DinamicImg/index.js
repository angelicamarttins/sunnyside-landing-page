import "./style.scss";

const DinamicImg = (props) => {
  return (
    <div className="dinamic-img">
      <picture className="dinamic-img__picture">
        <source
          className="picture__src"
          media={props.media}
          srcSet={props.srcset}
          alt={props.alt}
        />

        <img className="picture__img" src={props.src} alt={props.alt} />
      </picture>
    </div>
  );
}

export default DinamicImg;
