import React from 'react';
import Image from 'next/image';
import {
	IconBrandDiscord,
	IconBrandYoutube,
	IconBrandInstagram,
	IconBrandTiktok,
	IconBrandTwitter,
	IconBrandGithub,
} from '@tabler/icons-react';
import FooterBox from '../Boxes/FooterBox';
import Link from 'next/link';

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<div className='bg-[#262525] px-4 py-6'>
			<div className='flex flex-col md:flex-row justify-between items-center'>
				<div className='flex flex-col md:flex-row justify-center items-center md:py-12 space-y-6 md:space-y-0'>
					<Image unoptimized alt='logo' width={80} height={80} src={'/CMLogo.png'} />
					<div className='flex flex-col items-center md:items-start md:ml-6'>
						<h2 className='text-3xl md:text-5xl font-bold text-center md:text-left'>
							<span className='main-gradient'>CM</span>CLIENT
						</h2>
						<p className='font-semibold text-sm text-center md:text-left'>Feel the best experience of gaming with us</p>
					</div>
				</div>
				<div className='text-center md:text-left'>
					<p className='font-bold text-xl md:text-2xl'>Socials</p>
					<div className='flex flex-wrap justify-center gap-2 mt-2'>
						<FooterBox
							link='https://discord.com'
							icon={<IconBrandDiscord className='hover:scale-125 transition-transform text-xl md:text-2xl' />}
						/>
						<FooterBox
							link='https://youtube.com'
							icon={<IconBrandYoutube className='hover:scale-125 transition-transform text-xl md:text-2xl' />}
						/>
						<FooterBox
							link='https://instagram.com'
							icon={<IconBrandInstagram className='hover:scale-125 transition-transform text-xl md:text-2xl' />}
						/>
						<FooterBox
							link='https://tiktok.com'
							icon={<IconBrandTiktok className='hover:scale-125 transition-transform text-xl md:text-2xl' />}
						/>
						<FooterBox
							link='https://twitter.com'
							icon={<IconBrandTwitter className='hover:scale-125 transition-transform text-xl md:text-2xl' />}
						/>
						<FooterBox
							link='https://github.com'
							icon={<IconBrandGithub className='hover:scale-125 transition-transform text-xl md:text-2xl' />}
						/>
					</div>
				</div>
				<div className='text-center md:text-left mt-6 md:mt-0'>
					<p className='font-bold text-lg md:text-xl'>Legal</p>
					<ul className='list-disc text-sm md:text-base'>
						<li>
							<p>© CMCLIENT {currentYear}. All Rights Reserved.</p>
						</li>
						<li>
							<Link className='hover:text-yellow-500' href='mailto:support@cmclient.pl'>
								support@cmclient.pl
							</Link>
						</li>
						<li>
							<Link className='hover:text-yellow-500' href='https://cm-pack.pl/en/privacy' target='_blank'>
								Privacy policy
							</Link>{' '}
							<Link className='hover:text-yellow-500' href='https://cm-pack.pl/en/tos' target='_blank'>
								Terms of service
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
