import Header from './components/Header';
import Hero from './components/Hero';

function App() {
	return (
		<div className='container'>
			<Header />
			<main className='main'>
				<aside className='aside'>
					<ul>
						<li>
							<a href='#'>Summary</a>
						</li>
						<li>
							<a href='#'>Skills</a>
						</li>
						<li>
							<a href='#'>Experience</a>
						</li>
						<li>
							<a href='#'>Education</a>
						</li>
						<li>
							<a href='#'>Courses and trainings</a>
						</li>
						<li>
							<a href='#'>Portfolio</a>
						</li>
					</ul>
				</aside>
				<section className='info'>
					<Hero />
				</section>
			</main>
		</div>
	);
}

export default App;
