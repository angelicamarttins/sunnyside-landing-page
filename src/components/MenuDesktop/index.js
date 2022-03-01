import './style.scss'

import Logo from '../Logo'
import OptionsLink from '../OptionsLink'
import DinamicImg from '../DinamicImg'
import TitleContainer from '../TitleContainer'

import LogoWhite from '../../assets/images/icons/logoWhite.svg'
import HeaderDesktop from '../../assets/images/desktop/image-header.jpg'
import HeaderMobile from '../../assets/images/mobile/image-header.jpg'
import ArrowDown from '../../assets/images/icons/icon-arrow-down.svg'

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
				<Logo src={LogoWhite} alt='Sunnyside white logo' />

				<OptionsLink
					className={className}
					href={itens}
					target='_blank'
					rel='external'
					device='desktop'
				/>
			</div>

			<div className='menu-desktop__title'>
				<DinamicImg
					src={HeaderDesktop}
					srcSet={HeaderMobile}
					alt=''
					media='(max-width: 1440px)'
					type='image/jpg'
				/>
				<TitleContainer src={ArrowDown}>we are creatives</TitleContainer>
			</div>
		</div>
	)
}

export default MenuDesktop
