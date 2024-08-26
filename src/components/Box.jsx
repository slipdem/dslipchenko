import { BoxFooter } from './BoxFooter';
import {
	dateIcon,
	locationIcon,
	positionIcon,
	webPageIcon,
	gitOutlineIcon,
} from '../assets/svgIcons';

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
