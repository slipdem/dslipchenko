import React from 'react';
import {
	facebookIcon,
	githubIcon,
	linkedinIcon,
	mailIcon,
	svgBackgroundDiagonalLines,
	svgBackgroundDots,
	telegramIcon,
} from '../assets/svgIcons';

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
				{svgBackgroundDiagonalLines}
				<div className='hero__social-container'>
					<h3 className='hero__social-title'>Related resources</h3>
					<div className='hero__social-media-block'>
						<picture className='hero__social-photo'>
							<source srcSet='./img/myPhoto.jpg' />
							<img
								src='./img/myPhoto.jpg'
								alt='Dmytro Slipchenko'
							/>
						</picture>
						<nav className='hero__social-links'>
							<a href='mailto:dslipchenko@gmail.com'>{mailIcon}</a>
							<a
								href='https://github.com/slipdem'
								target='_blank'
								rel='noreferrer'>
								{githubIcon}
							</a>
							<a
								href='https://t.me/slipdem'
								target='_blank'
								rel='noreferrer'>
								{telegramIcon}
							</a>
							<a
								href='https://www.linkedin.com/in/dmytroslipchenko/'
								target='_blank'
								rel='noreferrer'>
								{linkedinIcon}
							</a>
							<a
								href='https://www.facebook.com/slipdem'
								target='_blank'
								rel='noreferrer'>
								{facebookIcon}
							</a>
						</nav>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
