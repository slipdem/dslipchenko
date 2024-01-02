import Aside from './components/Aside';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/sections/Skills';
import Portfolio from './components/sections/Portfolio';

// ToDO
// - change header: header onscroll position: sticky, content: Dmytro Slipchenko / frontend developer
// - change aside: position: sticky
// - change hero: add one more block with photo? social and other links (with icons? or just icons?)

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
