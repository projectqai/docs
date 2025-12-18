import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
	return (
		<main className="flex-1">
			{/* Hero Section with Image */}
			<div className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none" />
				<div className="container mx-auto px-6 py-24 sm:py-32 relative">
					<div className="max-w-4xl mx-auto text-center space-y-8">
						<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
							PROJECT-Q <span className="text-blue-600">HYDRA</span>
						</h1>
						<p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
							Open-source situational awareness machine connecting heterogeneous sensors
							for time critical missions
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
							<Link
								href="/docs"
								className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
							>
								Get Started
							</Link>
							<a
								href="https://github.com/projectqai/hydra"
								className="px-8 py-3 border border-border hover:bg-accent rounded-lg font-medium transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								View on GitHub
							</a>
						</div>
					</div>
				</div>

				{/* Hero Image */}
				<div className="container mx-auto px-6 pb-24 relative">
					<div className="max-w-6xl mx-auto">
						<div className="relative rounded-xl overflow-hidden border border-border shadow-2xl">
							<Image
								src="/hydra-screenshot.png"
								alt="Hydra tactical coordination interface showing real-time sensor fusion and entity tracking"
								width={2880}
								height={1800}
								className="w-full h-auto"
								priority
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Features Grid */}
			<div className="container mx-auto px-6 py-24">
				<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
					<div className="p-6 rounded-lg border border-border bg-card hover:border-blue-600/50 transition-colors">
						<h3 className="text-xl font-semibold mb-3">Sensor Fusion</h3>
						<p className="text-muted-foreground">
							Correlate tracks from multiple sensors with automated track correlation
							and real-time entity state management
						</p>
					</div>

					<div className="p-6 rounded-lg border border-border bg-card hover:border-blue-600/50 transition-colors">
						<h3 className="text-xl font-semibold mb-3">Ready for Action</h3>
						<p className="text-muted-foreground">
							Built for field teams,
							rescue personnel, and forward positions requiring real-time awareness
						</p>
					</div>

					<div className="p-6 rounded-lg border border-border bg-card hover:border-blue-600/50 transition-colors">
						<h3 className="text-xl font-semibold mb-3">DDIL-Native</h3>
						<p className="text-muted-foreground">
							Peer-to-peer mesh continues operating when disconnected, denied,
							intermittent, or limited networks
						</p>
					</div>

					<div className="p-6 rounded-lg border border-border bg-card hover:border-blue-600/50 transition-colors">
						<h3 className="text-xl font-semibold mb-3">Headless, API-First</h3>
						<p className="text-muted-foreground">
							Every capability via GRPC and existing protocols. Integrate in hours, not months,
							without replacing your existing systems
						</p>
					</div>
				</div>
			</div>

			{/* Quick Start */}
			<div className="border-t border-border">
				<div className="container mx-auto px-6 py-24">
					<div className="max-w-3xl mx-auto text-center space-y-6">
						<h2 className="text-3xl sm:text-4xl font-bold">Ready to build?</h2>
						<p className="text-xl text-muted-foreground">
							Download Hydra and start coordinating your tactical network
						</p>
						<div className="pt-4">
							<Link
								href="/docs"
								className="inline-flex px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
							>
								Read the Documentation
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
