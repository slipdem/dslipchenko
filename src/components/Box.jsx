import {
	dateIcon,
	listDots,
	locationIcon,
	positionIcon,
	webPageIcon,
	gitOutlineIcon,
} from '../assets/svgIcons';

const BoxFooterItem = ({ icon, text, isLinkActive }) => {
	return isLinkActive ? (
		<>
			<li className='box__footer-list-dots'>{listDots}</li>
			<li>
				{icon && <span className='box__footer-list-icon'>{icon}</span>}
				<span className='box__footer-list-text'>
					<a href={text} target='_black'>
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

const BoxFooter = ({ items }) => {
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

const Box = ({
	title,
	className,
	children,
	position,
	date,
	location,
	web,
	git,
}) => {
	const footerItems = [];

	if (position !== undefined) {
		footerItems.push({
			icon: positionIcon,
			text: position,
		});
	}
	if (location !== undefined) {
		footerItems.push({
			icon: locationIcon,
			text: location,
		});
	}
	if (date !== undefined) {
		footerItems.push({
			icon: dateIcon,
			text: date,
		});
	}
	if (web !== undefined) {
		footerItems.push({ icon: webPageIcon, text: web, isLinkActive: true });
	}
	if (git !== undefined) {
		footerItems.push({
			icon: gitOutlineIcon,
			text: git,
			isLinkActive: true,
		});
	}

	if (footerItems.length === 0) {
		footerItems.push({ icon: null, text: '' });
	}

	return (
		<article className={`box ${className}`}>
			<header className='box__header'>{title} </header>
			<div className='box__children'>{children}</div>
			<BoxFooter items={footerItems} />
		</article>
	);
};

export default Box;
