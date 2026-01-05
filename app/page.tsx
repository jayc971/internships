import PositionCard from '@/components/PositionCard';
import { positions } from '@/lib/positions';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-primary">InternLK</h1>
          <p className="text-sm text-gray-600 mt-1">Launch Your Career in Sri Lanka</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-text mb-6">
            Start Your Tech Career Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our team of talented interns and gain hands-on experience in software development,
            design, and quality assurance. We&apos;re building the future of tech in Sri Lanka.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-text mb-4">About Us</h3>
            <p className="text-gray-600 leading-relaxed">
              We&apos;re a remote-first startup passionate about nurturing Sri Lankan talent.
              Our internship program offers real-world experience, mentorship from industry professionals,
              and the opportunity to work on meaningful projects that make an impact.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-text mb-4">Current Openings</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our internship opportunities and find the perfect role to kickstart your career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {positions.map((position) => (
              <PositionCard key={position.id} position={position} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} InternLK. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Connecting Sri Lankan talent with opportunity
          </p>
        </div>
      </footer>
    </div>
  );
}
