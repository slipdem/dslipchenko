export const SiteNavigation = ({ className = '' }) => {
	return (
		<nav className={`site-navigation ${className}`}>
			<a
				className='site-navigation__link'
				href='#root'>
				Home
			</a>
			<a
				className='site-navigation__link'
				href='#summary'>
				Summary
			</a>
			<a
				className='site-navigation__link'
				href='#skills'>
				Skills
			</a>
			<a
				className='site-navigation__link'
				href='#experience'>
				Experience
			</a>
			<a
				className='site-navigation__link'
				href='#education'>
				Education
			</a>
			<a
				className='site-navigation__link'
				href='#portfolio'>
				Portfolio
			</a>
		</nav>
	);
};
