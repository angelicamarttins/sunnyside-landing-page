import "./style.scss";

const OptionsLink = (props) => {
  const { target, rel } = props;
  const { list, item, link, contact } = props.className;
  console.log(link);
  return (
    <div className="op-link">
      <ul className={list}>
        {props.href.map((element) => {
          return (
            <li className={item}>
              <a
                className={`${element.title === "contact" ? contact : link}`}
                href={element.href}
                target={target}
                rel={rel}
              >
                {element.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OptionsLink;
