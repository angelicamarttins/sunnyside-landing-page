import './style.scss'

import OptionsLink from '../OptionsLink'
import Logo from '../Logo'

import WhiteLogo from '../../assets/images/icons/logoWhite.svg'
import Hamburger from '../../assets/images/icons/icon-hamburger.svg'

const MenuMobile = () => {
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

	return (
		<div className='menu-mobile'>
			<div className='menu-mobile__nav'>
				<Logo src={WhiteLogo} alt='' />

				<img className='menu-mobile__nav--hamb' src={Hamburger} alt='' />

				<div className='menu-mobile__nav--box'>
					<OptionsLink
						className={className}
						href={itens}
						target='_blank'
						rel='external'
						mofidier='mobile'
					/>
				</div>
			</div>
		</div>
	)
}

export default MenuMobile
