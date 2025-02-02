'use client';

import React from 'react';

interface NavButtonProps {
	svg: React.ReactNode;
	name: string;
	sectionId?: string;
	link?: string;
}

function NavButton({ svg, name, sectionId, link }: NavButtonProps) {
	// const [menuOpen, setMenuOpen] = useState(false);

	const goToSection = () => {
		if (sectionId) {
			const section = document.getElementById(sectionId);
			if (section) section.scrollIntoView({ behavior: 'smooth' });
			// setMenuOpen(false);
		} else if (link) {
			window.open(link, '_blank');
		}
	};

	return (
		<button className='flex gap-1 font-bold' onClick={goToSection}>
			<div className='text-[#e7c104]'>{svg}</div>
			{name}
		</button>
	);
}

export default NavButton;
