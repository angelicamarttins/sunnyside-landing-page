import "./TitleContainer.scss";

const TitleContainer = props => {
  return (
    <div className="title-container">
      <h1 className="title-container__title">we are creatives</h1>

      <img
        className="title-container__arrow-down"
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
}

export default TitleContainer;
