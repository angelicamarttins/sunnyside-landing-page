import "./OptionsLink.scss";

function OptionsLink(props) {
  return (
    <div className="op-link">
      <ul className={props.className.list}>
        <li className={props.className.item}>
          <a
            className={props.className.link}
            href={props.href.about}
            target={props.target}
            rel={props.rel}
          >
            about
          </a>
        </li>
        <li className="op-link__item">
          <a
            className={props.className.link}
            href={props.href.services}
            target={props.target}
            rel={props.rel}
          >
            services
          </a>
        </li>
        <li className="op-link__item">
          <a
            className={props.className.link}
            href={props.href.projects}
            target={props.target}
            rel={props.rel}
          >
            projects
          </a>
        </li>
        <li className="op-link__item">
          <a
            className={props.className.contact}
            href={props.href.contact}
            target={props.target}
            rel={props.rel}
          >
            contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default OptionsLink;
