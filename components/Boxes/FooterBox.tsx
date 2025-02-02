import React from 'react';
import Link from 'next/link';

interface FooterProps {
	link: string;
	icon: React.ReactNode;
}

function FooterBox({ link, icon }: FooterProps) {
	return (
		<Link href={link} target='_blank'>
			{icon}
		</Link>
	);
}

export default FooterBox;
