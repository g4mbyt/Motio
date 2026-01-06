import Navigation from "@/components/ui/navigation";
import SearchbarLanding from "@/components/ui/searchbar-landing";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navigation />
      </header>
      <main className="bg-landing-background/50 flex flex-col items-center justify-center grow">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Build your next idea <br />
          <span className="bg-linear-to-r from-rose-800 to-rose-950 bg-clip-text text-transparent">
            faster than ever.
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          The ultimate toolkit for developers who want to ship high-quality
          products without the headache.
        </p>
        <div className="mt-10 flex gap-4">
          <SearchbarLanding />
        </div>
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
