import React from 'react';
import ModesBox from '../Boxes/ModesBox';

function Modes() {
	return (
		<div>
			<div className='w-full overflow-hidden relative'>
				<svg
					className='w-full h-auto'
					viewBox='0 0 1451 318'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					style={{ marginBottom: '-10px' }}>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M-339 0L-305.01 23.5556C-271.02 47.1111 -201.495 94.2222 -133.515 94.2222C-63.99 94.2222 -28.025 79.8889 41.5 74C109.48 68.1111 195 74 279 123.667C346.98 176.667 371 175.5 443.5 175.5C513.025 157.833 621.99 106 691.515 94.2222C759.495 82.4444 829.02 164.889 897 206.111C964.98 247.333 1034.51 247.333 1102.48 206.111C1172.01 164.889 1239.99 82.4444 1309.52 47.1111C1377.49 11.7778 1447.02 23.5556 1481.01 29.4444L1515 35.3333V318H1481.01C1447.02 318 1377.49 318 1309.52 318C1239.99 318 1172.01 318 1102.48 318C1034.51 318 964.98 318 897 318C829.02 318 759.495 318 691.515 318C621.99 318 554.01 318 484.485 318C416.505 318 346.98 318 279 318C211.02 318 141.495 318 73.515 318C3.98999 318 -63.99 318 -133.515 318C-201.495 318 -271.02 318 -305.01 318H-339V0Z'
						fill='#262525'
					/>
				</svg>
			</div>
			<div className='bg-[#262525] px-4 pb-20'>
				<div className='flex justify-center items-center max-w-7xl  mx-auto'>
					<h2 className='relative font-bold text-4xl md:text-5xl overflow-hidden pb-2'>
						<span className='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#e7c104] to-[#ff780b] rounded-full'></span>
						Servers
					</h2>
				</div>
				<div className='flex flex-col md:flex-row justify-between max-w-6xl xl:max-w-7xl mx-auto items-center pt-10 space-y-6 md:space-y-0'>
					<ModesBox
						img='/block1.jpg'
						link='https://cmpack.tebex.io/'
					/>
					<ModesBox
						img='/block2.jpg'
						link='https://cmpack.tebex.io/'
					/>
					<ModesBox
						img='/block3.jpg'
						link='https://cmpack.tebex.io/'
					/>
				</div>
			</div>

			<div className='w-full overflow-hidden relative'>
				<svg
					className='w-full h-auto'
					style={{ marginTop: '-10px' }}
					viewBox='0 0 1451 332'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M-19 184.444L7.95 172.148C34.9 159.852 90.025 135.259 143.925 147.556C199.05 159.852 252.95 209.037 308.075 190.593C361.975 172.148 417.1 86.0741 471 61.4815C524.9 36.8889 580.025 73.7778 633.925 86.0741C689.05 98.3704 742.95 86.0741 798.075 98.3704C851.975 110.667 907.1 147.556 961 184.444C1014.9 221.333 1070.03 258.222 1123.93 258.222C1179.05 258.222 1232.95 221.333 1288.08 227.481C1341.98 233.63 1397.1 282.815 1424.05 307.407L1451 332V0H1424.05C1397.1 0 1341.98 0 1288.08 0C1232.95 0 1179.05 0 1123.93 0C1070.03 0 1014.9 0 961 0C907.1 0 851.975 0 798.075 0C742.95 0 689.05 0 633.925 0C580.025 0 524.9 0 471 0C417.1 0 361.975 0 308.075 0C252.95 0 199.05 0 143.925 0C90.025 0 34.9 0 7.95 0H-19V184.444Z'
						fill='#262525'
					/>
				</svg>
			</div>
		</div>
	);
}

export default Modes;
