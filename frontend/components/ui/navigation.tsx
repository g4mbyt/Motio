import Link from 'next/link';
import { Button } from './button';
import Image from 'next/image';

export default function Navigation() {
	return (
		<nav className="flex flex-row justify-between items-center h-16 px-5 bg-white">
			<Image alt="Logo" src="/logo.png" width={100} height={100} />

			<ul className="flex flex-row gap-4">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>

			<div className="flex flex-row gap-2">
				<Link href="/sign-in">
					<Button className="rounded-full px-4 py-2 bg-white text-black border-2 border-primary">
						Sign in
					</Button>
				</Link>
				<Link href="/sign-up">
					<Button className="rounded-full px-4 py-2">Sign up</Button>
				</Link>
			</div>
		</nav>
	);
}
