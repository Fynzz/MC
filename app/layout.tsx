import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Możesz dostosować wagę
	subsets: ['latin'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'CMCLIENT Network',
	description: 'CMCLIENT Network is created with you in mind! Are you looking for a minecraft server where you can spend your free time and at the same time play with your friends? Check out our server and you will definitely not be disappointed!',
	robots: 'noindex, nofollow'
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.variable} antialiased`}>{children}</body>
		</html>
	);
}
