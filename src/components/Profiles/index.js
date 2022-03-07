import './style.scss'

const Profiles = ({ src, alt, text, name, position }) => {
	return (
		<article className='profiles'>
			<img src={src} alt={alt} className='profiles__img' />
			<p className='profiles__text'>{text}</p>
			<p className='profiles__name'>{name}</p>
			<p className='profiles__company-position '>{position}</p>
		</article>
	)
}

export default Profiles
