import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	IconBrandDiscord,
	IconBrandYoutube,
	IconBrandInstagram,
	IconBrandTiktok,
	IconBrandTwitter,
	IconBrandGithub,
} from '@tabler/icons-react';
import FooterBox from '../Boxes/FooterBox';
import config from '../../config/config.json';

function Footer() {
	const currentYear = new Date().getFullYear();
	const { texts, socialLinks, logoSrc } = config.footer;

	const socialIcons = {
		discord: <IconBrandDiscord className='hover:scale-125 transition-transform text-xl md:text-2xl' />,
		youtube: <IconBrandYoutube className='hover:scale-125 transition-transform text-xl md:text-2xl' />,
		instagram: <IconBrandInstagram className='hover:scale-125 transition-transform text-xl md:text-2xl' />,
		tiktok: <IconBrandTiktok className='hover:scale-125 transition-transform text-xl md:text-2xl' />,
		twitter: <IconBrandTwitter className='hover:scale-125 transition-transform text-xl md:text-2xl' />,
		github: <IconBrandGithub className='hover:scale-125 transition-transform text-xl md:text-2xl' />,
	};

	return (
		<div className='bg-[#262525] px-4 py-6'>
			<div className='flex flex-col md:flex-row justify-between items-center'>
				<div className='flex flex-col md:flex-row justify-center items-center md:py-12 space-y-6 md:space-y-0'>
					<Image unoptimized alt='logo' width={80} height={80} src={logoSrc} />
					<div className='flex flex-col items-center md:items-start md:ml-6'>
						<h2 className='text-3xl md:text-5xl font-bold text-center md:text-left'>
							<span className='main-gradient'>{texts.title.highlightedText}</span>
							{texts.title.plainText}
						</h2>
						<p className='font-semibold text-sm text-center md:text-left'>{texts.subtitle}</p>
					</div>
				</div>

				<div className='text-center md:text-left'>
					<p className='font-bold text-xl md:text-2xl'>{texts.socialsTitle}</p>
					<div className='flex flex-wrap justify-center gap-2 mt-2'>
						{Object.entries(socialLinks).map(([key, url]) => (
							<FooterBox key={key} link={url} icon={socialIcons[key as keyof typeof socialIcons]} />
						))}
					</div>
				</div>

				<div className='text-center md:text-left mt-6 md:mt-0'>
					<p className='font-bold text-lg md:text-xl'>{texts.legalTitle}</p>
					<ul className='list-disc text-sm md:text-base'>
						<li>
							<p>{texts.copyright.replace('{{currentYear}}', currentYear.toString())}</p>
						</li>
						<li>
							<Link className='hover:text-yellow-500' href={`mailto:${texts.supportEmail}`}>
								{texts.supportEmail}
							</Link>
						</li>
						<li>
							<Link
								className='hover:text-yellow-500'
								href={texts.privacyPolicyLink}
								target='_blank'
								rel='noopener noreferrer'>
								{texts.privacyPolicy}
							</Link>{' '}
							<Link
								className='hover:text-yellow-500'
								href={texts.termsOfServiceLink}
								target='_blank'
								rel='noopener noreferrer'>
								{texts.termsOfService}
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
