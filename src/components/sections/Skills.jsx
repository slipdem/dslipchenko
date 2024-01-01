import React from 'react';
import Box from '../Box';

const Skills = () => {
	return (
		<div className='wrapper'>
			<Box
				title='Skills'
				className='skills'>
				<ul className='box__list'>
					<li className='box__list-item'>
						<span>Web:</span>HTML/HTML5, CSS, SCSS/SASS
					</li>
					<li className='box__list-item'>
						<span>Programming Languages:</span>JavaScript, Typescript (basic),
						React
					</li>
					<li className='box__list-item'>
						<span>VCS:</span>Git
					</li>
					<li className='box__list-item'>
						<span>Languages:</span>English (Intermediate)
					</li>
					<li className='box__list-item'>
						<span>Other:</span>Redux, Figma, Adobe Photoshop, Bootstrap,
						Adaptive layout, BEM
					</li>
				</ul>
			</Box>
		</div>
	);
};

export default Skills;
