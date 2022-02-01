import "./LearnMore.scss";

function LearnMore(props) {
  return (
    <div className="learn-more">
      <a
        className={props.className}
        href={props.href}
        target={props.target}
        rel={props.rel}
      >
        learn more
      </a>
    </div>
  );
}

export default LearnMore;
