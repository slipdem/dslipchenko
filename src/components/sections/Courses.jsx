import React from 'react';
import Box from '../Box';

const externalLinkIcon = (
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
			d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
		/>
	</svg>
);

const Courses = () => {
	return (
		<div className='wrapper'>
			<Box
				title='Courses and trainings'
				className='courses'
				date='03/2023 - 07/2023'>
				<h2 className='box__children-title'>
					Front-end. The Ultimate Bootcamp for Beginners by Ciklum
				</h2>
				<p className='box__children-info'>
					<a
						href=''
						className='link'>
						Certificate with honor {externalLinkIcon}
					</a>
				</p>
			</Box>
		</div>
	);
};

export default Courses;
