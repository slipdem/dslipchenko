import Box from '../Box';
import { portfolioData } from '../../data/portfolio';

const Portfolio = () => {
	return (
		<div className='wrapper grid'>
			{portfolioData.map(
				({ cardTitle, projectTitle, desription, gitLink, link, img, spec }) => (
					<Box
						key={crypto.randomUUID()}
						className='portfolio'
						title={cardTitle}
						web={link}
						git={gitLink}>
						<h2 className='box__children-title'>{projectTitle}</h2>
						<picture className='box__children-image'>
							<img
								src={img}
								alt={projectTitle}
								loading='lazy'
							/>
						</picture>
						<p className='box__children-info'>{desription}</p>
						<p>{spec}</p>
					</Box>
				),
			)}
		</div>
	);
};

export default Portfolio;
