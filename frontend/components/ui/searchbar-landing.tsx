import Link from 'next/link';
import { Combobox } from './combobox';
import { Search } from 'lucide-react';

export default function SearchbarLanding() {
	const data = ['New', 'Used', 'Certified', 'Pre-Owned'];

	return (
		<div className="flex flex-row gap-2 border rounded-full px-4 py-2 divide-accent divide-x items-center">
			<Combobox data={data} placeholder="Make" />
			<Combobox data={data} placeholder="Model" />
			<Combobox data={data} placeholder="Year (From)" />
			<Combobox data={data} placeholder="Price (Up to)" />
			<Link
				href={'/search'}
				className="rounded-full flex flex-1 items-center justify-center bg-blue-500 p-2"
			>
				<Search color="white" />
			</Link>
		</div>
	);
}
