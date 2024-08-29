import { HeroSocial } from './HeroSocial';
import { svgBackgroundDots } from '../assets/svgIcons';

const Hero = () => {
	return (
		<section
			className='hero'
			id='summary'>
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
			<HeroSocial />
		</section>
	);
};

export default Hero;
