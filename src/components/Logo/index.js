import './Logo.scss';

function Logo(props) {
    return(
      <div>
        <img className='logo' src={props.src} alt={props.alt} />
      </div>
    )
};

export default Logo;