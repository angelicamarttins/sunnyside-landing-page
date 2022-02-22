import "./style.scss";

const TitleContainer = ({ src, alt, children }) => {
  return (
    <div className="title-container">
      <h1 className="title-container__title">{children}</h1>

      <img className="title-container__arrow-down" src={src} alt={alt} />
    </div>
  );
};

export default TitleContainer;
