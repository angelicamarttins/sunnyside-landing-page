import './style.scss'

import CoPresentations from '../CoPresentations'

import EggDesktop from '../../assets/images/desktop/image-transform.jpg'
import EggMobile from '../../assets/images/mobile/image-transform.jpg'
import OrangeCupDesktop from '../../assets/images/desktop/image-stand-out.jpg'
import OrangeCupMobile from '../../assets/images/mobile/image-stand-out.jpg'

const CoPresentation = () => {
	return (
		<section className='co-presentation'>
			<CoPresentations
				src={EggDesktop}
				srcSet={EggMobile}
				alt=''
				media='(max-width: 749px)'
				type='image/jpg'
				color='yellow'
				title='Transform your brand'
				text='We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.'
			/>
			<CoPresentations
				src={OrangeCupDesktop}
				srcSet={OrangeCupMobile}
				alt=''
				media='(max-width: 1440px)'
				type='image/jpg'
				color='red'
				title='Stand out to the right audience'
				text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
			/>
		</section>
	)
}

export default CoPresentation
