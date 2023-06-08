import React from 'react';

import styles from '../styles/Global';
import Link from 'next/link';
import Image from 'next/image';
import last from '../../public/last.png';

const Download = () => {
	return (
		<div className={`${styles.section} ${styles.bgWhite}`}>
			<div
				className={`${styles.subSection} md:flex-col flex-row items-center justify-center`}
			>
				<div className="flex-1 text-center">
					<div className="mb-5">
						<h1 className={`${styles.h1Text} ${styles.blackText}`}>
							Get the full source code on GitHub
						</h1>
					</div>

					<Link
						href={'https://github.com/numofran6/saloon-booking-app'}
						className={styles.btnPrimary}
					>
						Source Code
					</Link>
				</div>

				<div className="flex-1 flex justify-center items-center">
					<Image
						src={last}
						alt="download_png"
						width={1000}
						height={1000}
						className={`${styles.fullImg} md:mt-10`}
					/>
				</div>
			</div>
		</div>
	);
};

export default Download;
