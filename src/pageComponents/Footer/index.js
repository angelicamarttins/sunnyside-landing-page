import './style.scss'

import Logo from '../../components/Logo'
import OptionsLink from '../../components/OptionsLink'
import OptionsIcon from '../../components/OptionsIcon'

import GreenLogo from '../../assets/images/icons/logoGreen.svg'
import Facebook from '../../assets/images/icons/icon-facebook.svg'
import Instagram from '../../assets/images/icons/icon-instagram.svg'
import Twitter from '../../assets/images/icons/icon-twitter.svg'
import Pinterest from '../../assets/images/icons/icon-pinterest.svg'

const itens = [
	{
		title: 'about',
		ref: 'https://linkedin.com/in/marttinsangelica',
	},
	{
		title: 'services',
		ref: 'https://angelicamarttins.github.io/portfolio/',
	},
	{
		title: 'projects',
		ref: 'https://https://github.com/angelicamarttins',
	},
]

const className = {
	list: 'op-l__list',
	item: 'op-l__list__item',
	link: 'op-l__list__link',
}

const icons = [
	{
		title: 'facebook',
		href: 'https://facebook.com.br',
		icon: Facebook,
	},
	{
		title: 'instagram',
		href: 'https://instagram.com.br',
		icon: Instagram,
	},
	{
		title: 'twitter',
		href: 'https://twitter.com.br',
		icon: Twitter,
	},
	{
		title: 'pinterest',
		href: 'https://pinterest.com.br',
		icon: Pinterest,
	},
]

const Footer = () => {
	return (
		<section className='footer'>
			<Logo src={GreenLogo} alt='' modifier='footer' />
			<OptionsLink
				href={itens}
				className={className}
				target='_blank'
				rel='external'
				mofidier='footer-op-link'
			/>
			<OptionsIcon itens={icons} alt='' target='_blank' rel='external' />
		</section>
	)
}

export default Footer
