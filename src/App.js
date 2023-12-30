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
					<Box title='Skills' className='skills'>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus harum ipsum inventore natus dolorem voluptatum culpa dignissimos, labore corrupti autem officiis doloribus quasi nam accusamus, alias hic voluptate debitis accusantium!</p>
					</Box>
				</section>
			</main>
		</div>
	);
}

export default App;
