import Image from 'next/image';
import React from 'react';

import assets, { javascript, react } from '../assets';
import styles from '../styles/Global';

const FeatureCard = ({ iconUrl, iconText }) => (
	<div className={styles.featureCard}>
		<Image
			src={iconUrl}
			alt="icon"
			width={1000}
			height={1000}
			className={styles.featureImg}
		/>
		<p className={styles.featureText}>{iconText}</p>
	</div>
);

const Features = () => {
	return (
		<div className={`${styles.section} ${styles.bgPrimary} banner02`}>
			<div className={`${styles.subSection} flex-col text-center`}>
				<div>
					<h1 className={`${styles.h1Text} ${styles.whiteText}`}>
						Technologies
					</h1>
					<p className={`${styles.pText} ${styles.whiteText}`}>
						This mobile application has been developed using a cross-platform
						technology, React Native.
					</p>
				</div>

				<div className={styles.flexWrap}>
					<FeatureCard iconUrl={react} iconText="React Native" />
					<FeatureCard iconUrl={javascript} iconText="JavaScript" />
				</div>
			</div>
		</div>
	);
};

export default Features;
