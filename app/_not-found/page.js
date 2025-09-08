import Image from "next/image";
import Link from "next/link";

// Optional: background image
const bgImage =
  "https://images.unsplash.com/photo-1612831455544-c8f55f0e5d92?w=1200&auto=format&fit=crop&q=80";

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Not Found Background"
        fill
        className="object-cover brightness-50 blur-sm"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-lg p-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20">
        <h1 className="text-6xl font-bold text-amber-400 mb-4">404</h1>
        <h2 className="text-2xl mb-4">Oops! Page Not Found</h2>
        <p className="mb-6 text-gray-200">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-amber-400 text-gray-900 font-semibold rounded-lg hover:bg-amber-500 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
