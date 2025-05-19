import React from 'react';
import Link from 'next/link';

interface HeaderBoxProps {
	title: string;
	description: string;
	buttonText?: string;
	buttonLink?: string;
}

const HeaderBox: React.FC<HeaderBoxProps> = ({ title, description, buttonText, buttonLink }) => {
	return (
		<div className='header-box max-w-md'>
			<h2 className='font-bold text-4xl xl:text-7xl pb-4'>{title}</h2>
			<p className='font-semibold xl:text-xl opacity-[60%] pb-3'>{description}</p>
			{buttonText && buttonLink && (
				<Link href={buttonLink}>
					<a className='button-secondary hover:scale-105'>{buttonText}</a>
				</Link>
			)}
		</div>
	);
};

export default HeaderBox;
