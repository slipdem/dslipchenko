import { SiteNavigation } from './SiteNavigation';

const Header = ({ isScroll, isActive }) => {
	return (
		<header className={`header ${isScroll ? 'scroll' : ''}`}>
			<div className='navigation'>
				<SiteNavigation
					className='nav-header'
					active={isActive}
				/>
			</div>
		</header>
	);
};

export default Header;
