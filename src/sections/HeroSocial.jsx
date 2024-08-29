import { svgBackgroundDiagonalLines } from '../assets/svgIcons';
import {
	FaEnvelope,
	FaTelegram,
	FaGithub,
	FaLinkedin,
	FaFacebookSquare,
} from 'react-icons/fa';

export const HeroSocial = () => {
	return (
		<div className='social'>
			{svgBackgroundDiagonalLines}
			<div className='social__container'>
				<h3 className='social__title'>Related resources</h3>
				<div className='social__media-block'>
					<picture className='social__photo'>
						<source srcSet='./img/myPhoto.jpg' />
						<img
							src='./img/myPhoto.jpg'
							alt='Dmytro Slipchenko'
						/>
					</picture>
					<nav className='social__links'>
						<a
							className='social__link'
							href='mailto:dslipchenko@gmail.com'>
							<FaEnvelope size={20} />
							<span className='social__text'>dslipchenko@gmail.com</span>
						</a>
						<a
							className='social__link'
							href='https://github.com/slipdem'
							target='_blank'
							rel='noreferrer'>
							<FaGithub size={20} />
							<span className='social__text'>github.com/slipdem</span>
						</a>
						<a
							className='social__link'
							href='https://t.me/slipdem'
							target='_blank'
							rel='noreferrer'>
							<FaTelegram size={20} />
							<span className='social__text'>t.me/slipdem</span>
						</a>
						<a
							className='social__link'
							href='https://www.linkedin.com/in/dmytroslipchenko/'
							target='_blank'
							rel='noreferrer'>
							<FaLinkedin size={20} />
							<span className='social__text'>dmytroslipchenko</span>
						</a>
						<a
							className='social__link'
							href='https://www.facebook.com/slipdem'
							target='_blank'
							rel='noreferrer'>
							<FaFacebookSquare size={20} />
							<span className='social__text'>facebook.com/slipdem</span>
						</a>
					</nav>
				</div>
			</div>
		</div>
	);
};
