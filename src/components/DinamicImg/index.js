import './style.scss'

const DinamicImg = ({ srcSet, src, alt, media, type }) => {
	return (
		<article className='dinamic-img'>
			<picture className='dinamic-img__picture'>
				<source
					className='picture__src'
					srcSet={srcSet}
					alt={alt}
					media={media}
					type={type}
				/>

				<img className='picture__img' src={src} alt={alt} />
			</picture>
		</article>
	)
}

export default DinamicImg
