import {
	Portfolio,
	Education,
	Experience,
	Hero,
	Skills,
} from './sections';
import Aside from './components/Aside';
import Header from './components/Header';

// ToDO
// - change header: header onscroll position: sticky, content: Dmytro Slipchenko / frontend developer
// - change aside: position: sticky

function App() {
	return (
		<div className='container'>
			<Header />
			<main className='main'>
				<Aside />
				<section className='info'>
					<Hero />
					<h2 className='section__title'>Professional skills</h2>
					<Skills />
					<h2 className='section__title'>Work experience</h2>
					<Experience />
					<h2 className='section__title'>Education, Courses and trainings</h2>
					<Education />
					<h2 className='section__title'>Portfolio</h2>
					<Portfolio />
				</section>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
