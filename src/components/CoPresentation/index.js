import './style.scss'
import DinamicImg from '../DinamicImg'
import LearnMore from '../LearnMore'

const CoPresentation = ({
	src,
	srcSet,
	media,
	alt,
	type,
	title,
	text,
	color,
	href,
	target,
	rel,
}) => {
	return (
		<article className='co-presentation'>
			<div className='co-presentation__text'>
				<div className='co-presentation__text--size'>
					<h2 className='co-presentation__text__title size'>{title}</h2>
					<p className='co-presentation__text__p size'>{text}</p>
					<LearnMore color={color} href={href} target={target} rel={rel} />
				</div>
			</div>

			<DinamicImg
				src={src}
				srcSet={srcSet}
				media={media}
				alt={alt}
				type={type}
			/>
		</article>
	)
}

export default CoPresentation
