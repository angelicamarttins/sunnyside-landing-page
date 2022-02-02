import "./style.scss";

const TitleContainer = (props) => {
  const { src, alt } = props;
  return (
    <div className="title-container">
      <h1 className="title-container__title">we are creatives</h1>

      <img
        className="title-container__arrow-down"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default TitleContainer;
