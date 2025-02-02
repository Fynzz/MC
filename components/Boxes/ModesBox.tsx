import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ModesProps {
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
	);
}

export default ModesBox;
