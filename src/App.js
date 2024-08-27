import {
	Portfolio,
	Education,
	Experience,
	Hero,
	Skills,
	Aside,
} from './sections';
import Header from './components/Header';

function App() {
	return (
		<>
			<Header />
			<div className='container'>
				<main className='main'>
					<Aside />
					<section className='info'>
						<Hero />
						<h2
							className='section__title'
							id='skills'>
							Professional skills
						</h2>
						<Skills />
						<h2
							className='section__title'
							id='experience'>
							Work experience
						</h2>
						<Experience />
						<h2
							className='section__title'
							id='education'>
							Education, Courses and trainings
						</h2>
						<Education />
						<h2
							className='section__title'
							id='portfolio'>
							Portfolio
						</h2>
						<Portfolio />
					</section>
				</main>
				<footer></footer>
			</div>
		</>
	);
}

export default App;
