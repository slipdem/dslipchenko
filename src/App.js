import {
	Portfolio,
	Education,
	Experience,
	Hero,
	Skills,
	Aside,
} from './sections';
import Header from './components/Header';
import { SectionTitle } from './components/SectionTitle';
import { useEffect, useState } from 'react';

function App() {
	const [isScroll, setIsScroll] = useState(false);

	useEffect(() => {
		function handleScroll() {
			if (document.documentElement.scrollTop > 50) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		}
		window.onscroll = function () {
			console.log(document.documentElement.scrollTop);
			handleScroll();
		};

		// return window.removeEventListener('scroll', handleScroll);
	}, [window]);

	return (
		<>
			<Header isScroll={isScroll} />
			<div className='container'>
				<main className='main'>
					<Aside />
					<div className='info'>
						<Hero />
						<SectionTitle
							id='skills'
							title='Professional skills'
						/>
						<Skills />
						<SectionTitle
							id='experience'
							title='Work experience'
						/>
						<Experience />
						<SectionTitle
							id='education'
							title='Education, Courses and trainings'
						/>
						<Education />
						<SectionTitle
							id='portfolio'
							title='Portfolio'
						/>
						<Portfolio />
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
