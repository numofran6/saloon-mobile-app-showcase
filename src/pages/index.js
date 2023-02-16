import { Download, Features, SectionWrapper } from '../components';
import { homeCards, homeHero } from '../assets';
import styles from '../styles/Global';
import Link from 'next/link';
import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>DeFavoured Saloon</title>
			</Head>

			<SectionWrapper
				title="DeFavoured Beauty Saloon"
				description="Look And Feel Your Very Best. Home to a highly-skilled and friendly team of hair experts and spa concierges. Download our app to get the best out of our services!"
				showBtn
				mockupImg={homeHero}
				banner="banner"
				height={'min-h-screen'}
			/>

			<SectionWrapper
				title="Smart User Interface"
				description="Experience a buttery UI of our booking app. Smooth constant colors of a fluent UI, designed to make shopping and booking an appointment with us so satifying."
				mockupImg={homeCards}
				reverse
				height={'min-h-screen'}
			/>

			<Features />

			<Download />

			<div className="pb-7 pt-10 justify-center items-center bg-primary flex-row text-center banner04 space-x-7">
				<Link
					href={'https://github.com/numofran6'}
					className={`${styles.whiteText} hover:text-green-300 transition-all duration-500 ease-out my-5 minmd:my-10 font-IBMPlex font-light minmd:text-3xl minlg:text-4xl minmd:leading-16`}
				>
					My GitHub
				</Link>

				<Link
					href={'https://numoportfolio.vercel.app/'}
					className={` ${styles.whiteText} hover:text-green-300 transition-all duration-500 ease-out my-5 minmd:my-10 font-IBMPlex font-light minmd:text-3xl minlg:text-4xl minmd:leading-16`}
				>
					Portfolio Website
				</Link>

				<Link
					href={'https://linkedin.com/in/numofrancis'}
					className={`${styles.whiteText} hover:text-green-300 transition-all duration-500 ease-out my-5 minmd:my-10 font-IBMPlex font-light minmd:text-3xl minlg:text-4xl minmd:leading-16`}
				>
					LinkedIn
				</Link>
			</div>
		</>
	);
};

export default Home;
