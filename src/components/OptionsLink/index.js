import "./style.scss";

const OptionsLink = ({ target, rel, href, className, mofidier }) => {
  const { list, item, link, contact } = className;

  return (
    <div className="op-link">
      <ul className={`${list} ${list}--${mofidier}`}>
        {href.map(({ title, ref }) => {
          return (
            <li className={item} key={title}>
              <a
                className={`${
                  title === "contact"
                    ? `${link} ${contact} contact--${mofidier}`
                    : `${link} ${mofidier}`
                }`}
                href={ref}
                target={target}
                rel={rel}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OptionsLink;
