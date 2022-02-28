import './style.scss'

const OptionsLink = ({ target, rel, href, className, device }) => {
	const { list, item, link, contact } = className

	return (
		<div className='op-link'>
			<ul className={list}>
				{href.map(({ title, ref }) => {
					return (
						<li className={item}>
							<a
								className={`${
									title === 'contact'
										? `${link} ${contact} contact--${device}`
										: `${link} ${device}`
								}`}
								href={ref}
								target={target}
								rel={rel}
							>
								{title}
							</a>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default OptionsLink
