import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Modes from '@/components/Modes/Modes';
import Navbar from '@/components/Navbar/Navbar';
import Staff from '@/components/Staff/Staff';

export default function Home() {
	return (
		<div className=' overflow-hidden'>
			<Navbar />
			<Header />
			<Modes />
			<Staff />
			<Footer />
		</div>
	);
}
