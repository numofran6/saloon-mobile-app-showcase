import React from 'react';

import styles from '../styles/Global';
import { expo } from '../assets';
import Button from './Button';
import Image from 'next/image';

const SectionWrapper = ({
	title,
	description,
	showBtn,
	mockupImg,
	banner,
	reverse,
	height,
	imgStyle,
}) => {
	return (
		<div
			className={`${height} ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} 
      ${banner}`}
		>
			<div
				className={`flex items-center 
        ${reverse ? styles.boxReverseClass : styles.boxClass} 
        w-11/12 sm:w-full minmd:w-3/4`}
			>
				<div
					className={`${styles.descDiv} 
          ${reverse ? ' fadeRightMini' : ' fadeLeftMini'}
          ${reverse ? styles.textRight : styles.textLeft}
        `}
				>
					<h1
						className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.h1Text}`}
					>
						{title}
					</h1>
					<p
						className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}
					>
						{description}
					</p>
					{showBtn && (
						<Button
							assetUrl={expo}
							link="https://expo.dev/@numofran6/saloon?serviceType=classic&distribution=expo-go"
						/>
					)}
				</div>

				<div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
					<Image
						src={mockupImg}
						alt="mockup"
						width={4000}
						height={4000}
						priority
						className={`
           ${reverse ? ' fadeLeftMini' : ' fadeRightMini'}
          ${imgStyle}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default SectionWrapper;
