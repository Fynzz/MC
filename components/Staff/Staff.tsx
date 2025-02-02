import React from 'react';
import StaffBox from '../Boxes/StaffBox';
import { IconMail } from '@tabler/icons-react';

function Staff() {
	return (
		<div className='bg-[#171717] px-4 pb-24'>
			<div className='flex justify-center items-center max-w-5xl mx-auto'>
				<h2 className='relative font-bold text-4xl md:text-5xl overflow-hidden pb-2'>
					<span className='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#e7c104] to-[#ff780b] rounded-full'></span>
					Staff
				</h2>
			</div>
			<div className='flex flex-col md:flex-row justify-between max-w-5xl mx-auto items-center pt-10 space-y-8 md:space-y-0'>
				<StaffBox
					uuid='536d590d-90d3-4d41-a01c-6a5fec9e7b03'
					name='cmclient'
					role='Server Developer'
					contactIcon={<IconMail />}
					contactMethod='support@cmclient.pl'
					nationalityIcon={
						<svg className='rounded-sm' width='24' height='16' viewBox='0 0 24 16' xmlns='http://www.w3.org/2000/svg'>
							<path fill='#fff' d='M0 0h24v8H0z'></path> {/* Biały pas */}
							<path fill='#d80027' d='M0 8h24v8H0z'></path> {/* Czerwony pas */}
						</svg>
					}
				/>
				<StaffBox
					uuid='a782b599-88a5-4b7e-9166-a724d8fa92c0'
					name='amazingpl'
					role='Frontend Developer'
					contactIcon={<IconMail />}
					contactMethod='support@cmclient.pl'
					nationalityIcon={
						<svg className='rounded-sm' width='24' height='16' viewBox='0 0 24 16' xmlns='http://www.w3.org/2000/svg'>
							<path fill='#fff' d='M0 0h24v8H0z'></path> {/* Biały pas */}
							<path fill='#d80027' d='M0 8h24v8H0z'></path> {/* Czerwony pas */}
						</svg>
					}
				/>
				<StaffBox
					uuid='327dec49-46d7-4b0d-992f-1c03365b2b65'
					name='merv1k'
					role='Administrator'
					contactIcon={<IconMail />}
					contactMethod='support@cmclient.pl'
					nationalityIcon={
						<svg className='rounded-sm' width='24' height='16' viewBox='0 0 24 16' xmlns='http://www.w3.org/2000/svg'>
							<path fill='#fff' d='M0 0h24v8H0z'></path> {/* Biały pas */}
							<path fill='#d80027' d='M0 8h24v8H0z'></path> {/* Czerwony pas */}
						</svg>
					}
				/>
			</div>
		</div>
	);
}

export default Staff;
