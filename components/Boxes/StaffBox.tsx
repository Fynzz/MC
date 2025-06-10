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
		<div className="flex flex-col items-center justify-center bg-[#242424] border-2 border-[#606060] rounded-xl p-3 hover:border-[#e7c104] transition-colors">
			<Image
				alt="minecraft skin front"
				width={150}
				height={150}
				src={`https://skins.mcstats.com/body/front/${uuid}?shadow=true&enableCosmeticType=cloak`}
			/>
			<div>
				<h2 className="font-black uppercase main-gradient text-3xl">{name}</h2>
				<p className="font-bold text-xl">{role}</p>
			</div>
			<div>
				<p className="flex justify-center items-center gap-1">
					{contactIcon}
					{contactMethod}
					{nationalityIcon}
				</p>
			</div>
		</div>
	);
}

export default StaffBox;
