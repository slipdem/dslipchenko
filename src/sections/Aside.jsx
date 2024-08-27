import { SiteNavigation } from '../components/SiteNavigation';

const Aside = () => {
	return (
		<aside className='aside'>
			<menu className='aside__menu'>
				<SiteNavigation className='nav-aside' />
			</menu>
		</aside>
	);
};

export default Aside;
