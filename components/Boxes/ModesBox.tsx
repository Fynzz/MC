import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ModesProps {
	img: string;
	link: string;
}

function ModesBox({ img, link }: ModesProps) {
	return (
		<a href={'https://www.tebex.io/'} className='flex flex-col items-center'>
			<div className='relative bg-[#1b1919] border-2 border-black rounded-lg p-4 cursor-pointer w-80 h-80 overflow-hidden shadow-[5px_5px_0px_1px_black] transition-transform duration-100 ease-in-out hover:scale-105  hover:bg-gradient-to-r hover:from-[#e7c104] hover:via-[#ff780b] hover:to-[#ff8c00] hover:border-transparent'>
				<img
					src={img}
					alt='mode picture'
					className='w-full h-full object-cover filter drop-shadow-[5px_5px_0px_rgba(0,0,0,0.356)] transition-transform duration-100 ease-in-out'
				/>
				<div className='absolute bottom-0 left-0 w-full p-4 flex flex-col items-center to-transparent'></div>
			</div>
		</a>
	);
}

export default ModesBox;
