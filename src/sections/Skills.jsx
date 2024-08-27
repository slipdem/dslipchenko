import Box from '../components/Box';

const Skills = () => {
	return (
		<div className='wrapper skills'>
			<Box
				title='Skills'
				className='skills'>
				<ul className='box__list'>
					<li className='box__list-item'>
						<span>Web:</span>HTML/HTML5, CSS, SCSS/SASS
					</li>
					<li className='box__list-item'>
						<span>Programming Languages:</span>JavaScript, Typescript
					</li>
					<li className='box__list-item'>
						<span>Frameworks / Libraries:</span>React, Redux, Redux Toolkit,
						shadcn, Tailwind, GSAP, Swiper, Bootstrap
					</li>
					<li className='box__list-item'>
						<span>Version Control:</span>Git
					</li>
					<li className='box__list-item'>
						<span>UI/UX Design:</span>Figma, Adobe Photoshop
					</li>
					<li className='box__list-item'>
						<span>Languages:</span>English (Intermediate)
					</li>
					<li className='box__list-item'>
						<span>Other:</span> Adaptive layout, Responsive layout, BEM, JIRA
					</li>
				</ul>
			</Box>
		</div>
	);
};

export default Skills;
