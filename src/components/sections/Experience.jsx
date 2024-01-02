import React from 'react';
import Box from '../Box';

const Experience = () => {
	return (
		<div className='wrapper grid col-2'>
			<Box
				title='Experience'
				className='experience'
				position='web developer (full time remote)'
				date='01/2017 - 11/2022'>
				<h2 className='experience__title'>MediaHero</h2>
				<p className='experience__info'>
					Build websites, maintain web-servers and hosting.
				</p>
				<ul className='box__list'>
					<li className='box__list-item'>
						using HTML, CSS, and JavaScript, to create and maintain websites and
						landing pages
					</li>
					<li className='box__list-item'>
						build and maintain websites on WordPress
					</li>
					<li className='box__list-item'>
						managed the day-to-day operations of Google Ads accounts, including
						account setup and create and launch new campaigns
					</li>
					<li className='box__list-item'>
						maintain optimal website performance and manage hosting environment
					</li>
				</ul>
			</Box>

			<Box
				title='Experience'
				className='experience'
				position='distribution manager (b2b)'
				date='08/2013 - 12/2015'>
				<h2 className='experience__title'>ITek</h2>
				<p className='experience__info'>
					Distribution of audio equipment and accessories for Apple products.
				</p>
				<ul className='box__list'>
					<li className='box__list-item'>
						active search and attraction of new clients
					</li>
					<li className='box__list-item'>
						negotiating with сustomers and сlients
					</li>
					<li className='box__list-item'>
						formation and support of client base
					</li>
					<li className='box__list-item'>
						documentary support of transactions
					</li>
					<li className='box__list-item'>
						contracts, registration of necessary documents, payment control
						sales plan implementation
					</li>
				</ul>
			</Box>
			<Box
				title='Experience'
				className='experience'
				position='technical expert'
				date='05/2011 - 05/2013'>
				<h2 className='experience__title'>E-ton Concept Store</h2>
				<p className='experience__info'>
					Sales of exclusive phones, gadgets, speakers, tablets, PC & Mac,
					smartphones, and accessories for Apple, Vertu, Tag Hauer, Mobiado.
				</p>
				<ul className='box__list'>
					<li className='box__list-item'>work with VIP customers</li>
					<li className='box__list-item'>
						installation of applications on iPhone/iPod/iPad
					</li>
					<li className='box__list-item'>troubleshooting Mac Os X issues</li>
					<li className='box__list-item'>
						tracking the presence of the goods in the store, order, and
						acceptance of the goods
					</li>
				</ul>
			</Box>
		</div>
	);
};

export default Experience;
