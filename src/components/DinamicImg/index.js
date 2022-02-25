import './style.scss'

const DinamicImg = ({ media, srcSet, src, alt }) => {
	return (
		<div className='dinamic-img'>
			<picture className='dinamic-img__picture'>
				<source
					className='picture__src'
					media={media}
					srcSet={srcSet}
					alt={alt}
				/>

				<img className='picture__img' src={src} alt={alt} />
			</picture>
		</div>
	)
}

export default DinamicImg
