import { BoxFooterItem } from './BoxFooterItem';

export const BoxFooter = ({ items }) => {
	return (
		<footer className='box__footer'>
			<ul className='box__footer-list'>
				{items.map(({ icon, text, isLinkActive }) => (
					<BoxFooterItem
						key={crypto.randomUUID()}
						icon={icon}
						text={text}
						isLinkActive={isLinkActive}
					/>
				))}
			</ul>
		</footer>
	);
};
