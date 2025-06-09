import React from 'react';
import StaffBox from '../Boxes/StaffBox';
import { IconMail } from '@tabler/icons-react';
import config from '../../config/config.json';

function Staff() {
	const iconMap: { [key: string]: React.JSX.Element } = {
		pl: (
			<svg className='rounded-sm' width='24' height='16' viewBox='0 0 24 16' xmlns='http://www.w3.org/2000/svg'>
				<path fill='#fff' d='M0 0h24v8H0z'></path>
				<path fill='#d80027' d='M0 8h24v8H0z'></path>
			</svg>
		),
	};

	return (
		<div id='community' className='bg-[#171717] px-4 pb-24'>
			<div className='flex justify-center items-center max-w-5xl mx-auto'>
				<h2 className='relative font-bold text-4xl md:text-5xl overflow-hidden pb-2'>
					<span className='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#e7c104] to-[#ff780b] rounded-full'></span>
					Staff
				</h2>
			</div>
			<div className='flex flex-col md:flex-row justify-between max-w-5xl mx-auto items-center pt-10 space-y-8 md:space-y-0'>
				{config.staff.items.map(({ uuid, name, role, contactMethod, nationality,}) => (
					<StaffBox
						key={uuid}
						uuid={uuid}
						name={name}
						role={role}
						contactIcon={<IconMail />}
						contactMethod={contactMethod}
						nationalityIcon={iconMap[nationality] || null}
					/>
				))}
			</div>
		</div>
	);
}

export default Staff;
