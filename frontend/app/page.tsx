import Navigation from '@/components/ui/navigation';
import SearchbarLanding from '@/components/ui/searchbar-landing';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<header>
				<Navigation />
			</header>
			<main className="bg-landing-background/50 flex flex-col items-center justify-center grow gap-10">
				<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
					Find your next drive <br />
					<span className="bg-linear-to-r from-rose-800 to-rose-950 bg-clip-text text-transparent">
						Better than brand new.
					</span>
				</h1>
				<p className="mt text-lg text-gray-600 max-w-2xl">
					The ultimate marketplace for certified pre-owned vehicles.
					Get premium quality, verified history, and transparent
					pricing—without the dealership headache.
				</p>
				<SearchbarLanding />
				<Image
					src="/taycan-gts-landing.avif"
					alt="Porsche Taycan GTS"
					width={1000}
					height={1000}
				/>
			</main>
		</div>
	);
}
