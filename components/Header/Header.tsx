import React from 'react';
import Image from 'next/image';
import HeaderBox from '../Boxes/HeaderBox';
import Link from 'next/link';

function Header() {
	return (
		<div className='flex flex-col  pt-6 max-w-7xl mx-auto'>
			{/* Hero Section */}
			<div className='flex flex-col-reverse md:flex-row justify-between items-center h-auto md:h-[50vh] p-10 md:pt-20 xl:pt-40'>
				<div className='text-center md:text-left'>
					<h2 className='font-bold text-6xl xl:text-8xl flex items-center justify-center md:justify-start'>
						Adventures <Image className='pl-2' alt='heart' width={70} height={70} src={'/heart.png'} />
					</h2>
					<p className='font-bold text-4xl xl:text-7xl pb-4'>are waiting for you</p>
					<p className='font-semibold xl:text-xl max-w-md xl:max-w-xl opacity-[60%] pb-3 mx-auto md:mx-0'>
						Join CMCLIENT Network! Enjoy Minecraft with friends. Fun, friendly server. Check it out!
					</p>
					<Link href={''} className='button-secondary hover:scale-105'>
						Join Now
					</Link>
				</div>
				<div className='flex justify-center'>
					<Image
						src={'/SkinRender.png'}
						className='-rotate-6 md:-rotate-12 hidden md:flex'
						alt='skin render'
						width={400}
						height={400}
					/>
				</div>
			</div>

			{/* Info Boxes Section – możesz odkomentować poniżej jeśli chcesz pokazać dodatkowe info */}
			{/*
			<div className='flex sm:flex-row justify-between pt-12 gap-4'>
				<HeaderBox
					title='CMCLIENT support'
					description="Additional features such as Team View, automatic waypoints, cooldowns and custom nametags thanks to CMCLIENT support"
				/>
				<HeaderBox
					title='Low ping'
					description='Hosted in one of the best data centers in Europe, guaranteed low ping.'
				/>
				<HeaderBox
					title='500K+'
					description='Over half a million registered accounts on our client'
				/>
				<HeaderBox
					title='24/7'
					description='Our services are available 24/7 so you can enjoy them at any time of the day'
				/>
			</div>
			*/}
		</div>
	);
}

export default Header;
