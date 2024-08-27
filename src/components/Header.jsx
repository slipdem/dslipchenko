import { SiteNavigation } from './SiteNavigation';

const Header = () => {
	return (
		<header className='header'>
			<div className='navigation'>
				<SiteNavigation className='nav-header' />
			</div>
		</header>
	);
};

export default Header;
