import './style.scss'

import DinamicImg from '../DinamicImg'

import MilkBottlesDesktop from '../../assets/images/desktop/image-gallery-milkbottles.jpg'
import MilkBottlesMobile from '../../assets/images/mobile/image-gallery-milkbottles.jpg'
import OrangeDesktop from '../../assets/images/desktop/image-gallery-orange.jpg'
import OrangeMobile from '../../assets/images/mobile/image-gallery-orange.jpg'
import ConeDesktop from '../../assets/images/desktop/image-gallery-cone.jpg'
import ConeMobile from '../../assets/images/mobile/image-gallery-cone.jpg'
import SugarCubesDesktop from '../../assets/images/desktop/image-gallery-sugarcubes.jpg'
import SugarCubesMobile from '../../assets/images/mobile/image-gallery-sugarcubes.jpg'

const Gallery = () => {
	return (
		<section className='gallery'>
			<DinamicImg
				srcSet={MilkBottlesMobile}
				src={MilkBottlesDesktop}
				alt=''
				media='(max-width: 750px)'
				type='image/jpg'
			/>
			<DinamicImg
				srcSet={OrangeMobile}
				src={OrangeDesktop}
				alt=''
				media='(max-width: 750px)'
				type='image/jpg'
			/>
			<DinamicImg
				srcSet={ConeMobile}
				src={ConeDesktop}
				alt=''
				media='(max-width: 750px)'
				type='image/jpg'
			/>
			<DinamicImg
				srcSet={SugarCubesMobile}
				src={SugarCubesDesktop}
				alt=''
				media='(max-width: 750px)'
				type='image/jpg'
			/>
		</section>
	)
}

export default Gallery
