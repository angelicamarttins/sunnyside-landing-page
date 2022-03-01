import DinamicImg from '../DinamicImg'

import './style.scss'
const Services = ({ src, srcSet, alt, media, type, title, text, color }) => {
	return (
		<article className={`services ${color}`}>
			<div className='services__img'>
				<DinamicImg
					src={src}
					srcSet={srcSet}
					alt={alt}
					media={media}
					type={type}
				/>

				<div className='services__img__text'>
					<h3 className='services__img__text__title'>{title}</h3>
					<p className='services__img__text__txt'>{text}</p>
				</div>
			</div>
		</article>
	)
}

export default Services
