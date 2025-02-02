import React from 'react';
import Image from 'next/image';

interface StaffProps {
	uuid: string;
	name: string;
	role: string;
	contactIcon: React.ReactNode;
	contactMethod: string;
	nationalityIcon: React.ReactNode;
}

function StaffBox({ uuid, name, role, contactIcon, contactMethod, nationalityIcon }: StaffProps) {
	return (
<<<<<<< HEAD
		<div className=' flex flex-col items-center hover:border-[#e7c104] justify-center bg-[#242424]  border-[#606060] border-2 rounded-xl p-8'>
=======
		<div className=' flex flex-col items-center hover:border-[yellow] justify-center bg-[#242424]  border-[#606060] border-2 rounded-xl p-8'>
>>>>>>> 9ea3f05fb477cf8f4f54b439fde6c9aa95a87816
			<Image
				alt='minecraft skin front'
				width={200}
				height={200}
				src={'https://skins.mcstats.com/body/front/' + uuid + '?shadow=true&enableCosmeticType=cloak'}
			/>
			<div>
				<h2 className=' font-black uppercase main-gradient text-3xl'>{name}</h2>
				<p className=' font-bold text-xl'>{role}</p>
			</div>
			<div>
				<p className='flex justify-center items-center gap-1'>
					{contactIcon}
					{contactMethod}
					{nationalityIcon}
				</p>
			</div>
		</div>
	);
}

export default StaffBox;
