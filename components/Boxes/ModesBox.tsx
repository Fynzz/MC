import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ModesProps {
<<<<<<< HEAD
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
=======
	title: string;
	description: string;
	icon: React.ReactNode;
	img: string;
	link: string;
	color: string;
}

function ModesBox({ title, description, icon, img, link, color}: ModesProps) {
	return (
		<Link className="hover:scale-125 transition-transform" href={link}>
		<div className="flex flex-col justify-center rounded-lg items-center bg-[#131313]">
			<div className="w-full flex justify-center">
			<Image unoptimized width={350} height={350} alt="block" src={img} />
			</div>
			<div className="flex flex-col justify-between w-full h-32 px-4 py-2 bg-[#1B1B1B]">
			<Link className="text-2xl font-bold max-w-xs max-h-5" href={link}>
				<div className="flex flex-row justify-center items-center">{icon}{title}</div>
				<p className=' mx-auto text-xs max-w-[20rem]'>{description}</p>
			</Link>
			</div>
		</div>
		</Link>
>>>>>>> 9ea3f05fb477cf8f4f54b439fde6c9aa95a87816
	);
}

export default ModesBox;
