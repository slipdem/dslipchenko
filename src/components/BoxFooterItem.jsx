import { listDots } from '../assets/svgIcons';

export const BoxFooterItem = ({ icon, text, isLinkActive }) => {
	return isLinkActive ? (
		<>
			<li className='box__footer-list-dots'>{listDots}</li>
			<li>
				{icon && <span className='box__footer-list-icon'>{icon}</span>}
				<span className='box__footer-list-text'>
					<a
						href={text}
						target='_black'>
						{text.length > 30 ? text.slice(0, 30) + '...' : text}
					</a>
				</span>
			</li>
		</>
	) : (
		<>
			<li className='box__footer-list-dots'>{listDots}</li>
			<li>
				{icon && <span className='box__footer-list-icon'>{icon}</span>}
				<span className='box__footer-list-text'>{text}</span>
			</li>
		</>
	);
};
