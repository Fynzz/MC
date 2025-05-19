import React from 'react';
import Image from 'next/image';
import config from '../../config/config.json';
import Link from 'next/link';

function Header() {
	return (
		<div className='flex flex-col  pt-6 max-w-7xl mx-auto'>
			<div className='flex flex-col-reverse md:flex-row justify-between items-center h-auto md:h-[50vh] p-10 md:pt-20 xl:pt-40'>
				<div className='text-center md:text-left'>
					<h2 className='font-bold text-6xl xl:text-8xl flex items-center justify-center md:justify-start'>
						{config.hero.headline} <Image className='pl-2' alt='heart' width={70} height={70} src={'/heart.png'} />
					</h2>
					<p className='font-bold text-4xl xl:text-7xl pb-4'>{config.hero.subtitle}</p>
					<p className='font-semibold xl:text-xl max-w-md xl:max-w-xl opacity-[60%] pb-3 mx-auto md:mx-0'>
						{config.hero.description}
					</p>
					<Link href={''} className='button-secondary hover:scale-105'>
						{config.hero.cta}
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
		</div>
	);
}

export default Header;
