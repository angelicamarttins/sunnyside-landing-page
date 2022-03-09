import { useEffect, useState } from 'react'

import './style.scss'

import MenuDesktop from '../../components/MenuDesktop'
import MenuMobile from '../../components/MenuMobile'
import DinamicImg from '../../components/DinamicImg'
import TitleContainer from '../../components/TitleContainer'

import HeaderDesktop from '../../assets/images/desktop/image-header.jpg'
import HeaderMobile from '../../assets/images/mobile/image-header.jpg'
import ArrowDown from '../../assets/images/icons/icon-arrow-down.svg'

const getWindowWidthDimension = () => {
	const width = window.innerWidth
	return width
}

const Header = () => {
	const [windowWidthDimension, setWindowWidthDimension] = useState(
		getWindowWidthDimension()
	)

	useEffect(() => {
		function handleResize() {
			setWindowWidthDimension(getWindowWidthDimension())
		}

		window.addEventListener('resize', handleResize)
	}, [windowWidthDimension])

	return (
		<header className='header'>
			{windowWidthDimension < 750 ? <MenuMobile /> : <MenuDesktop />}
			<div className='header__title'>
				<DinamicImg
					src={HeaderDesktop}
					srcSet={HeaderMobile}
					alt=''
					media='(max-width: 749px)'
					type='image/jpg'
				/>
				<TitleContainer src={ArrowDown}>we are creatives</TitleContainer>
			</div>
		</header>
	)
}

export default Header
