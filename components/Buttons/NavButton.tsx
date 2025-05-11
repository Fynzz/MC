'use client';

import React from 'react';

interface NavButtonProps {
	svg: React.ReactNode;
	name: string;
	sectionId?: string;
	link?: string;
}

function NavButton({ svg, name, sectionId, link }: NavButtonProps) {
	const goToSection = () => {
		if (sectionId) {
			const section = document.getElementById(sectionId);
			if (section) section.scrollIntoView({ behavior: 'smooth' });
		} else if (link) {
			window.open(link, '_blank');
		}
	};

	return (
		<button
			className="flex items-center gap-1 font-bold hover:translate-y-1 transition-transform"
			onClick={goToSection}
		>
			<span className="text-[#e7c104]">{svg}</span>
			{name}
		</button>
	);
}

export default NavButton;
