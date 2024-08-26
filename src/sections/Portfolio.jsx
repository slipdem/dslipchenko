import Box from '../components/Box';
import { portfolioData } from '../data/portfolioData';

const Portfolio = () => {
	return (
		<div className='wrapper grid'>
			{portfolioData.map(
				({ cardTitle, projectTitle, desription, gitLink, link, img, spec }) => (
					<Box
						key={crypto.randomUUID()}
						className='portfolio'
						title='Portfolio'
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
						<p className='box__children-tech-stack'>
							{spec.map((item) => (
								<span key={crypto.randomUUID()}>#{item} </span>
							))}
						</p>
						<p className='box__children-info'>{desription}</p>
					</Box>
				),
			)}
		</div>
	);
};

export default Portfolio;
