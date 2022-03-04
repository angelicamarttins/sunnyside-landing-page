import './style.scss'

import DinamicImg from '../DinamicImg'
import LearnMore from '../LearnMore'

const CoPresentations = ({
	src,
	srcSet,
	media,
	alt,
	type,
	title,
	children,
	color,
	href,
	target,
	rel,
}) => {
	return (
		<article className='co-presentations'>
			<div className='co-presentations__text'>
				<div className='co-presentations__text--size'>
					<h2 className='co-presentations__text__title'>{title}</h2>
					<p className='co-presentations__text__p'>{children}</p>
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

export default CoPresentations
