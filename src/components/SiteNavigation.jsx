const NAV_DATA = [
	{ href: '#root', id: 'root', title: 'Home' },
	{ href: '#summary', id: 'summary', title: 'Summary' },
	{ href: '#skills', id: 'skillsIntersection', title: 'Skills' },
	{ href: '#experience', id: 'experienceIntersection', title: 'Experience' },
	{ href: '#education', id: 'educationIntersection', title: 'Education' },
	{ href: '#portfolio', id: 'portfolioIntersection', title: 'Portfolio' },
];

export const SiteNavigation = ({ active, className = '' }) => {
	return (
		<nav className={`site-navigation ${className}`}>
			{NAV_DATA.map(({ href, id, title }) => (
				<a
					key={crypto.randomUUID()}
					className={`site-navigation__link ${active === id ? 'active' : ''}`}
					href={href}>
					{title}
				</a>
			))}
		</nav>
	);
};
