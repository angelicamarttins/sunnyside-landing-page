import './style.scss'

<<<<<<< HEAD
const DinamicImg = ({ media, srcSet, src, alt }) => {
=======
const DinamicImg = ({ media, srcSet, src, alt, type }) => {
>>>>>>> develop
	return (
		<div className='dinamic-img'>
			<picture className='dinamic-img__picture'>
				<source
					className='picture__src'
					media={media}
					srcSet={srcSet}
					alt={alt}
<<<<<<< HEAD
=======
					type={type}
>>>>>>> develop
				/>

				<img className='picture__img' src={src} alt={alt} />
			</picture>
		</div>
	)
}

export default DinamicImg
