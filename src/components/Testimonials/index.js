import Profiles from '../Profiles'
import './style.scss'

import Emily from '../../assets/images/testimonials/image-emily.jpg'
import Jennie from '../../assets/images/testimonials/image-jennie.jpg'
import Thomas from '../../assets/images/testimonials/image-thomas.jpg'

const Testimonials = () => {
	return (
		<section section className='testimonials'>
			<h3 section className='testimonials__title'>
				client testimonials
			</h3>
			<div className='testimonials__profiles'>
				<Profiles
					src={Emily}
					alt=''
					name='Emily R.'
					text='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
					position='Marketing Director'
				/>
				<Profiles
					src={Thomas}
					alt=''
					name='Thomas S.'
					text='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
					position='Chief Operating Officer'
				/>
				<Profiles
					src={Jennie}
					alt=''
					name='Jennie F.'
					text='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
					position='Business Owner'
				/>
			</div>
		</section>
	)
}

export default Testimonials
