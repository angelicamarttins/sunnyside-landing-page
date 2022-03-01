import './style.scss'

import CoPresentation from '../../components/CoPresentation'
import Services from '../../components/Services'

import EggDesktop from '../../assets/images/desktop/image-transform.jpg'
import EggMobile from '../../assets/images/mobile/image-transform.jpg'
import OrangeCupDesktop from '../../assets/images/desktop/image-stand-out.jpg'
import OrangeCupMobile from '../../assets/images/mobile/image-stand-out.jpg'
import CherryDesktop from '../../assets/images/desktop/image-graphic-design.jpg'
import CherryMobile from '../../assets/images/mobile/image-graphic-design.jpg'
import TangerineDesktop from '../../assets/images/desktop/image-photography.jpg'
import TangerineMobile from '../../assets/images/mobile/image-photography.jpg'

const Main = () => {
	return (
		<main className='main'>
			<section className='main__co-presentation'>
				<CoPresentation
					src={EggDesktop}
					srcSet={EggMobile}
					alt=''
					media='(max-width: 1440px)'
					type='image/jpg'
					color='yellow'
					title='Transform your brand'
					text='We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.'
				/>
				<CoPresentation
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

			<section className='main__services'>
				<Services
					src={CherryDesktop}
					srcSet={CherryMobile}
					alt=''
					media='(max-width: 1440px)'
					type='image/jpg'
					title='Graphic Design'
					text='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
					color='green'
				/>

				<Services
					src={TangerineDesktop}
					srcSet={TangerineMobile}
					alt=''
					media='(max-width: 1440px)'
					type='image/jpg'
					title='Photography'
					text='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
					color='blue'
				/>
			</section>
		</main>
	)
}

export default Main
