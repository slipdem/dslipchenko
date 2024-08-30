import { forwardRef } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import Box from '../components/Box';
import { experienceData } from '../data/experienceData';

const Experience = forwardRef((props, ref) => {
	return (
		<>
			<SectionTitle
				title='Work experience'
				id='experience'
			/>
			<section
				className='wrapper grid experience'
				ref={ref}
				id='experienceIntersection'>
				{experienceData.map(
					({ company, position, date, desription, responsibilities }) => (
						<Box
							key={crypto.randomUUID()}
							title='Experience'
							className='experience'
							position={position}
							date={date}>
							<h2 className='experience__title'>{company}</h2>
							<p className='experience__info'>{desription}</p>
							<ul className='box__list'>
								{responsibilities.map((item) => (
									<li
										key={crypto.randomUUID()}
										className='box__list-item'>
										{item}
									</li>
								))}
							</ul>
						</Box>
					),
				)}
			</section>
		</>
	);
});

export default Experience;
