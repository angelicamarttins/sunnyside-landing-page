import './style.scss'

import OptionsLink from '../OptionsLink'
import Logo from '../Logo'

import WhiteLogo from '../../assets/images/icons/logoWhite.svg'
import Hamburger from '../../assets/images/icons/icon-hamburger.svg'

const MenuMobile = (props) => {
	const arrayItem = [
		{
			title: 'about',
			href: 'https://linkedin.com/in/marttinsangelica',
		},
		{
			title: 'services',
			href: 'https://angelicamarttins.github.io/portfolio/',
		},
		{
			title: 'projects',
			href: 'https://https://github.com/angelicamarttins',
		},
		{
			title: 'contact',
			href: 'https://linkedin.com/in/marttinsangelica',
		},
	]

	const classNameMobile = {
		list: 'op-link__list-m',
		item: 'op-link__list-m__item',
		link: 'op-link__list-m__link',
		contact: 'op-link__list-m__link op-link__list-m__link--contact',
	}

	return (
		<div className='menu-mobile'>
			<div className='menu-mobile__nav'>
				<Logo src={WhiteLogo} />

				<img className='menu-mobile__nav--hamb' src={Hamburger} alt='' />

				<div className='menu-mobile__nav--box'>
					<OptionsLink
						className={classNameMobile}
						href={arrayItem}
						target='_blank'
						rel='external'
					/>
				</div>
			</div>
		</div>
	)
}

export default MenuMobile
