import { SiteNavigation } from './SiteNavigation';

const Header = (isScroll) => {
	return (
		<header className={`header ${isScroll ? '' : 'scroll'}`}>
			<div className='navigation'>
				<SiteNavigation className='nav-header' />
			</div>
		</header>
	);
};

export default Header;
