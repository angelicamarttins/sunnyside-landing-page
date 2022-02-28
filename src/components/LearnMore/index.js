import './style.scss'

const LearnMore = ({ color, href, target, rel }) => {
	return (
		<div className='learn-more'>
			<a
				className={`learn-more--${color}`}
				href={href}
				target={target}
				rel={rel}
			>
				learn more
			</a>
		</div>
	)
}

export default LearnMore
