import React from 'react';
import {
	dateIcon,
	listDots,
	locationIcon,
	positionIcon,
	webPageIcon,
	gitOutlineIcon,
} from '../assets/svgIcons';

const BoxFooterItem = ({ icon, text }) => {
	return (
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
				{items.map(({ icon, text }) => (
					<BoxFooterItem
						key={crypto.randomUUID()}
						icon={icon}
						text={text}
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
		footerItems.push({ icon: positionIcon, text: position });
	}
	if (location !== undefined) {
		footerItems.push({ icon: locationIcon, text: location });
	}
	if (date !== undefined) {
		footerItems.push({ icon: dateIcon, text: date });
	}
	if (web !== undefined) {
		footerItems.push({ icon: webPageIcon, text: web });
	}
	if (git !== undefined) {
		footerItems.push({ icon: gitOutlineIcon, text: git });
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
