import React from 'react';
import { svgBackgroundDots } from '../assets/svgIcons';

const Hero = () => {
	return (
		<section className='hero'>
			{svgBackgroundDots}
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
			<div className='hero__social'>
				<h3>Related resources</h3>
				<div className='navigation__social'>
					<a href='#.'>email</a>
					<a href='#.'>git</a>
					<a href='#.'>linkedIn</a>
					<a href='#.'>telegram</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
