import CoPresentation from '../../components/CoPresentation'

import EggDesktop from '../../assets/images/desktop/image-transform.jpg'
import EggMobile from '../../assets/images/mobile/image-transform.jpg'
import OrangeCupDesktop from '../../assets/images/desktop/image-stand-out.jpg'
import OrangeCupMobile from '../../assets/images/mobile/image-stand-out.jpg'

const Main = () => {
	return (
		<main>
			<section>
				<CoPresentation
					src={EggDesktop}
					srcSet={EggMobile}
					media='(max-width: 1440px)'
					alt=''
					type='image/jpg'
					color='yellow'
					title='Transform your brand'
					text='We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.'
				/>
				<CoPresentation
					src={OrangeCupDesktop}
					srcSet={OrangeCupMobile}
					media='(max-width: 1440px)'
					alt=''
					type='image/jpg'
					color='red'
					title='Stand out to the right audience'
					text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
				/>
			</section>
		</main>
	)
}

export default Main
