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
<<<<<<< HEAD
		<button className='flex gap-1 font-bold' onClick={goToSection}>
			<div className='text-[#e7c104]'>{svg}</div>
=======
		<button className='flex gap-1 hover:translate-y-1 font-bold transition-transform' onClick={goToSection}>
			{svg}
>>>>>>> 9ea3f05fb477cf8f4f54b439fde6c9aa95a87816
			{name}
		</button>
	);
}

export default NavButton;
