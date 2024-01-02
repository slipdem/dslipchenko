import React from 'react';
import {
	dateIcon,
	listDots,
	locationIcon,
	positionIcon,
} from '../assets/svgIcons';

const Box = ({ title, className, children, position, date, location }) => {
	return (
		<article className={`box ${className}`}>
			<header className='box__header'>{title} </header>
			<div className='box__children'>{children}</div>
			<footer className='box__footer'>
				<ul className='box__footer-list'>
					{position !== undefined && date !== undefined ? (
						<>
							<li className='box__footer-list-dots'>{listDots}</li>
							<li>
								<span className='box__footer-list-icon'>{positionIcon}</span>
								<span className='box__footer-list-text'>{position}</span>
							</li>
							<li className='box__footer-list-dots'>{listDots}</li>
							<li>
								<span className='box__footer-list-icon'>{dateIcon}</span>
								<span className='box__footer-list-text'>{date}</span>
							</li>
						</>
					) : location !== undefined && date !== undefined ? (
						<>
							<li className='box__footer-list-dots'>{listDots}</li>
							<li>
								<span className='box__footer-list-icon'>{locationIcon}</span>
								<span className='box__footer-list-text'>{location}</span>
							</li>
							<li className='box__footer-list-dots'>{listDots}</li>
							<li>
								<span className='box__footer-list-icon'>{dateIcon}</span>
								<span className='box__footer-list-text'>{date}</span>
							</li>
						</>
					) : date !== undefined ? (
						<>
							<li className='box__footer-list-dots'>{listDots}</li>
							<li>
								<span className='box__footer-list-icon'>{dateIcon}</span>
								<span className='box__footer-list-text'>{date}</span>
							</li>
						</>
					) : (
						<>
							<li className='box__footer-list-dots'>{listDots}</li>
							<li></li>
						</>
					)}
				</ul>
			</footer>
		</article>
	);
};

export default Box;
