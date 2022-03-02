import './style.scss'

import CoPresentation from '../../components/CoPresentation'
import Services from '../../components/Services'
import Testimonials from '../../components/Testimonials'

const Main = () => {
	return (
		<main className='main'>
			<CoPresentation />
			<Services />
			<Testimonials />
		</main>
	)
}

export default Main
