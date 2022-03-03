import './style.scss'

const Logo = ({ src, alt, modifier }) => {
	return (
		<>
			<img className={`logo--${modifier}`} src={src} alt={alt} />
		</>
	)
}

export default Logo
