import DinamicImg from '../DinamicImg'

import './style.scss'
const Service = ({ src, srcSet, alt, media, type, title, text, color }) => {
	return (
		<article className={`service service--${color}`}>
			<div className='service__img'>
				<DinamicImg
					src={src}
					srcSet={srcSet}
					alt={alt}
					media={media}
					type={type}
				/>

				<div className='service__img__text'>
					<h3 className='service__img__text__title'>{title}</h3>
					<p className='service__img__text__txt'>{text}</p>
				</div>
			</div>
		</article>
	)
}

export default Service
