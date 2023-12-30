import React from 'react';

const Hero = () => {
	return (
		<section className='hero'>
			<svg
				fill=''
				role='img'
				aria-hidden='true'
				className='svg__dots'>
				<title>Dot Regular</title>
				<pattern
					id='DotRegular-pattern-:R36alb9l6:'
					x='0'
					y='0'
					width='8'
					height='8'
					patternUnits='userSpaceOnUse'>
					<circle
						cx='0.5'
						cy='0.5'
						r='0.5'
						fill='currentColor'></circle>
				</pattern>
				<rect
					width='100%'
					height='100%'
					fill='url(#DotRegular-pattern-:R36alb9l6:)'></rect>
			</svg>
			<div className='hero__info'>
				<h3 className='hero__info-subtitle'>
					Frontend Developer / Kyiv, Ukraine
				</h3>
				<h1 className='hero__info-title'>Dmytro Slipchenko</h1>
				<p className='hero__info-text'>
					Frontend Developer with experience in building and maintaining web
					applications. Proficient in HTML, CSS, JavaScript, and React. Looking
					for a position that would allow me to grow as a developer.
				</p>
			</div>
		</section>
	);
};

export default Hero;
