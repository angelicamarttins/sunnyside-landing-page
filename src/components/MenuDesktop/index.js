import './style.scss'

import Logo from '../Logo'
import OptionsLink from '../OptionsLink'

import LogoWhite from '../../assets/images/icons/logoWhite.svg'

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
	{
		title: 'contact',
		ref: 'https://linkedin.com/in/marttinsangelica',
	},
]

const className = {
	list: 'op-l__list',
	item: 'op-l__list__item',
	link: 'op-l__list__link',
	contact: 'contact',
}

const MenuDesktop = () => {
	return (
		<div className='menu-desktop'>
			<div className='menu-desktop__header'>
				<Logo src={LogoWhite} alt='Sunnyside white logo' modifier='header' />

				<OptionsLink
					className={className}
					href={itens}
					target='_blank'
					rel='external'
					mofidier='desktop'
				/>
			</div>
		</div>
	)
}

export default MenuDesktop
