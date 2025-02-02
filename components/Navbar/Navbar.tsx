'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import NavButton from '../Buttons/NavButton';
import { IconShoppingCart, IconUsers, IconBrandDiscord, IconMenu, IconX } from '@tabler/icons-react';
import Link from 'next/link';

function Navbar() {
<<<<<<< HEAD
	const [playerCount, setPlayerCount] = useState<string | null>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const serverAddress = 'tabmc.pl';
		const apiUrl = `https://api.mcstatus.io/v2/status/java/${serverAddress}`;

		fetch(apiUrl)
			.then(response => response.json())
			.then(data => {
				if (data.players) {
					setPlayerCount(`${data.players.online}/${data.players.max}`);
				}
			})
			.catch(error => {
				console.error('Error fetching player count:', error);
				setPlayerCount('Error');
			});
	}, []);

	return (
		<div className='flex flex-col md:flex-row justify-between px-4 items-center max-w-5xl xl:max-w-7xl mx-auto pt-5'>
			<div className='flex justify-between items-center w-full md:w-auto'>
				<div className='flex gap-8'>
					<div className='flex justify-center items-center gap-1'>
						<Image unoptimized alt='logo' width={30} height={30} src={'/CMLogo.png'} />
						<Link className='text-2xl font-bold' href=''>
							<span className='main-gradient'>CM</span>CLIENT
						</Link>
					</div>
					<a className='button-primary'>{playerCount || 'Loading...'}</a>
				</div>
				<button className='md:hidden p-2' onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
				</button>
			</div>

			<div
				className={`md:flex md:flex-row item md:items-center md:gap-3 mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
				<div className='flex flex-col md:flex-row md:items-center md:gap-3'>
					<NavButton svg={<IconShoppingCart strokeWidth={2} />} name='Store' sectionId='store' />

					<NavButton svg={<IconUsers strokeWidth={2} />} name='Community' sectionId='community' />

					<NavButton svg={<IconBrandDiscord strokeWidth={2} />} name='Discord' link='https://discord.com' />
				</div>
			</div>
		</div>
	);
=======
    const [playerCount, setPlayerCount] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const serverAddress = 'tabmc.pl';
        const apiUrl = `https://api.mcstatus.io/v2/status/java/${serverAddress}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.players) {
                    setPlayerCount(`${data.players.online}/${data.players.max}`);
                }
            })
            .catch(error => {
                console.error('Error fetching player count:', error);
                setPlayerCount('Error');
            });
    }, []);

    return (
        <div className='flex flex-col md:flex-row justify-between px-4 items-center max-w-7xl mx-auto pt-5'>
            <div className='flex justify-between items-center w-full md:w-auto'>
                <div className='flex gap-8'>
                    <div className='flex justify-center items-center gap-1'>
                        <Image unoptimized alt='logo' width={30} height={30} src={'/CMLogo.png'} />
                        <Link className='text-2xl font-bold' href=''>
                            <span className='main-gradient'>CM</span>CLIENT
                        </Link>
                    </div>
                    <a className='button-primary'>{playerCount || 'Loading...'}</a>
                </div>
                <button 
                    className='md:hidden p-2'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
                </button>
            </div>

            <div className={`md:flex md:flex-row item md:items-center md:gap-3 mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className='flex flex-col md:flex-row md:items-center md:gap-3'>
                    <NavButton
                        svg={<IconShoppingCart strokeWidth={2} />}
                        name='Store'
                        sectionId='store'
                    />

                    <NavButton
                        svg={<IconUsers strokeWidth={2} />}
                        name='Community'
                        sectionId='community'
                    />

                    <NavButton
                        svg={<IconBrandDiscord strokeWidth={2} />}
                        name='Discord'
                        link='https://discord.com'
                    />
                </div>
            </div>
        </div>
    );
>>>>>>> 9ea3f05fb477cf8f4f54b439fde6c9aa95a87816
}

export default Navbar;
