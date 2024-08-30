export const SiteNavigation = ({ active, className = '' }) => {
	return (
		<nav className={`site-navigation ${className}`}>
			<a
				className={`site-navigation__link`}
				href='#root'>
				Home
			</a>
			<a
				className={`site-navigation__link ${
					active === 'summary' ? 'active' : ''
				}`}
				href='#summary'>
				Summary
			</a>
			<a
				className={`site-navigation__link ${
					active === 'skillsIntersection' ? 'active' : ''
				}`}
				href='#skills'>
				Skills
			</a>
			<a
				className={`site-navigation__link ${
					active === 'experienceIntersection' ? 'active' : ''
				}`}
				href='#experience'>
				Experience
			</a>
			<a
				className={`site-navigation__link ${
					active === 'educationIntersection' ? 'active' : ''
				}`}
				href='#education'>
				Education
			</a>
			<a
				className={`site-navigation__link ${
					active === 'portfolioIntersection' ? 'active' : ''
				}`}
				href='#portfolio'>
				Portfolio
			</a>
		</nav>
	);
};
