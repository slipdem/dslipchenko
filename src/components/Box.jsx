import React from 'react';

const positionIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='currentColor'
		className='w-6 h-6 icon'>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z'
		/>
	</svg>
);

const dateIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='currentColor'
		className='w-6 h-6 icon'>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'
		/>
	</svg>
);

const locationIcon = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='currentColor'
		className='w-6 h-6 icon'>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
		/>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
		/>
	</svg>
);

const listDots = (
	<svg
		fill='currentColor'
		role='img'
		aria-hidden='true'
		className='e16fp6ou0 gamut-h8rrzn e3tf18d0 checker-pattern'>
		<pattern
			id='CheckerDense-pattern-:Ra5l6lak3qlamlb9l6:'
			x='0'
			y='0'
			width='4'
			height='4'
			patternUnits='userSpaceOnUse'>
			<rect
				width='1'
				height='1'
				fill='currentColor'></rect>
			<rect
				x='2'
				y='2'
				width='1'
				height='1'
				fill='currentColor'></rect>
		</pattern>
		<rect
			width='100%'
			height='100%'
			fill='url(#CheckerDense-pattern-:Ra5l6lak3qlamlb9l6:)'></rect>
	</svg>
);

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
