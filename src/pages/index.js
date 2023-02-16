import { Download, Features, SectionWrapper } from '../components';
import assets from '../assets';
import styles from '../styles/Global';
import Link from 'next/link';

const Home = () => {
	return (
		<>
			<SectionWrapper
				title="DeFavoured Beauty Saloon"
				description="Look And Feel Your Very Best. Home to a highly-skilled and friendly team of hair experts and spa concierges. Download our app to get the best out of our services!"
				showBtn
				mockupImg={assets.homeHero}
				banner="banner"
				height={'min-h-screen'}
			/>

			<SectionWrapper
				title="Smart User Interface"
				description="Experience a buttery UI of our booking app. Smooth constant colors of a fluent UI, designed to make shopping and booking an appointment with us so satifying."
				mockupImg={assets.homeCards}
				reverse
				height={'min-h-screen'}
			/>

			<Features />

			<Download />

			<div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
				<div
					className={`${styles.pText} ${styles.whiteText} flex-row space-x-5`}
				>
					<Link
						href={''}
						className="hover:text-green-300 transition-all duration-500 ease-out"
					>
						My GitHub
					</Link>

					<Link
						href={''}
						className="hover:text-green-300 transition-all duration-500 ease-out"
					>
						Portfolio Website
					</Link>

					<Link
						href={''}
						className="hover:text-green-300 transition-all duration-500 ease-out"
					>
						LinkedIn
					</Link>
				</div>
			</div>
		</>
	);
};

export default Home;
