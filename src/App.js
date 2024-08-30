import { Portfolio, Education, Experience, Hero, Skills } from './sections';
import Header from './components/Header';
import { useEffect, useRef, useState } from 'react';

function App() {
	const [isScroll, setIsScroll] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const refHero = useRef(null);
	const refSkills = useRef(null);
	const refExperience = useRef(null);
	const refEducation = useRef(null);
	const refPortfolio = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsActive(entry.target.id);
					}
				});
			},
			{
				rootMargin: '-150px',
				threshold: 0.4,
			},
		);
		if (refHero.current) observer.observe(refHero.current);
		if (refSkills.current) observer.observe(refSkills.current);
		if (refExperience.current) observer.observe(refExperience.current);
		if (refEducation.current) observer.observe(refEducation.current);
		if (refPortfolio.current) observer.observe(refPortfolio.current);
		return () => observer.disconnect();
	}, []);

	const handleScroll = () => {
		if (document.documentElement.scrollTop > 50) {
			setIsScroll(true);
		} else {
			setIsScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<Header
				isScroll={isScroll}
				isActive={isActive}
			/>
			<div className='container'>
				<main className='main'>
					<div className='info'>
						<Hero ref={refHero} />
						<Skills ref={refSkills} />
						<Experience ref={refExperience} />
						<Education ref={refEducation} />
						<Portfolio ref={refPortfolio} />
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
