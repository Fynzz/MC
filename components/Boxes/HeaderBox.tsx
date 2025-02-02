import React from 'react';

interface HeaderProps {
	title: string;
	description: string;
}

function HeaderBox({ title, description }: HeaderProps) {
	return (
		<div className='hover:scale-125 pb-10 md:pb-0 transition-transform cursor-cell'>
			<h2 className='main-gradient md:text-2xl text-xl font-black'>{title}</h2>
			<p className='opacity-[70%] hidden md:flex text-sm max-w-52 font-semibold'>{description}</p>
		</div>
	);
}

export default HeaderBox;
