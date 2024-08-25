import Box from '../Box';
import { experienceData } from '../../data/experienceData';

const Experience = () => {
	return (
		<div className='wrapper grid col-2'>
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
		</div>
	);
};

export default Experience;
