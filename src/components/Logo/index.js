import './style.scss'

const Logo = ({ src, alt }) => {
	return (
		<>
			<img className='logo' src={src} alt={alt} />
		</>
	)
}

export default Logo
