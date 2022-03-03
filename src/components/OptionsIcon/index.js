import './style.scss'

const OptionsIcon = ({ itens, alt, target, rel }) => {
	return (
		<article className='op-icon'>
			<ul className='op-icon__list'>
				{itens.map(({ title, href, icon }) => {
					return (
						<li className='op-icon__item' key={title}>
							<a
								className='op-icon__link'
								href={href}
								target={target}
								rel={rel}
							>
								<img className='op-icon__img' src={icon} alt={alt} />
							</a>
						</li>
					)
				})}
			</ul>
		</article>
	)
}

export default OptionsIcon
