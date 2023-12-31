import Aside from './components/Aside';
import Box from './components/Box';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
	return (
		<div className='container'>
			<Header />
			<main className='main'>
				<Aside />
				<section className='info'>
					<Hero />
					<div className='wrapper'>
						<Box
							title='Skills'
							className='skills'>
							<ul className='box__list'>
								<li className='box__list-item'>
									<span>Web:</span>HTML/HTML5, CSS, SCSS/SASS
								</li>
								<li className='box__list-item'>
									<span>Programming Languages:</span>JavaScript, Typescript
									(basic), React
								</li>
								<li className='box__list-item'>
									<span>VCS:</span>Git
								</li>
								<li className='box__list-item'>
									<span>Languages:</span>English (Intermediate)
								</li>
								<li className='box__list-item'>
									<span>Other:</span>Redux, Figma, Adobe Photoshop, Bootstrap,
									Adaptive layout, BEM
								</li>
							</ul>
						</Box>
					</div>
					<div className='wrapper'>
						<Box
							title='Experience'
							className='experience'>
							<h2 className='experience__title'>MediaHero</h2>
							<p className='experience__position'>
								<span>position:</span>
								web developer (full time remote)
							</p>
							<p className='experience__date'>01/2017 - 11/2022</p>
							<p className='experience__info'>
								Build websites, maintain web-servers and hosting
							</p>
							<ul className='box__list'>
								<li className='box__list-item'>
									using HTML, CSS, and JavaScript, to create and maintain
									websites and landing pages
								</li>
								<li className='box__list-item'>
									build and maintain websites on WordPress
								</li>
								<li className='box__list-item'>
									managed the day-to-day operations of Google Ads accounts,
									including account setup and create and launch new campaigns
								</li>
								<li className='box__list-item'>
									maintain optimal website performance and manage hosting
									environment
								</li>
							</ul>
						</Box>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
