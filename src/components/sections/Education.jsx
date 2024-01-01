import React from 'react';
import Box from '../Box';

const Education = () => {
	return (
		<div className='wrapper'>
			<Box
				title='Education'
				className='education'
				location='Cherkasy, Ukraine'
				date='2004 - 2006'>
				<h2 className='box__children-title'>
					Cherkasy State Technological University
				</h2>
				<p className='box__children-info'>
					Software engineering for automated systems
				</p>
			</Box>

			<Box
				title='Education'
				className='education'
				location='Smila, Cherkasy region, Ukraine'
				date='2000 - 2004'>
				<h2 className='box__children-title'>
					Smila Technical Secondary School of Food Technologies NUFT
				</h2>
				<p className='box__children-info'>
					Developing and programming of the automated systems
				</p>
			</Box>
		</div>
	);
};

export default Education;
