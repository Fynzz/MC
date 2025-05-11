import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ModesProps {
	title: string;
	description: string;
	img: string;
	link: string;
}

function ModesBox({ title, description, img, link }: ModesProps) {
	return (
		<Link href={link} className='hover:scale-105 transition-transform'>
			<div className='flex flex-col justify-center items-center p-2 m-2 rounded-lg bg-[#131313] shadow-[5px_5px_0px_1px_black] overflow-hidden'>
				<div className='w-full flex justify-center'>
					<Image unoptimized width={350} height={350} alt='block' src={img} />
				</div>
				<div className='flex flex-col justify-between w-full h-32 px-4 py-2 bg-[#1B1B1B]'>
					<div className='text-2xl font-bold flex justify-center items-center gap-2'>{title}</div>
					<p className=' font-semibold text-center pb-3 max-w-[20rem]'>{description}</p>
				</div>
			</div>
		</Link>
	);
}

export default ModesBox;
