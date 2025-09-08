import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Contact | Short URL",
  description:
    "Reach out to Short URL via email, WhatsApp, GitHub, or portfolio. Secure and reliable URL shortener support.",
  keywords: [
    "Short URL",
    "URL Shortener",
    "Contact",
    "Next.js",
    "React",
    "Tailwind",
  ],
  creator: "Short URL",
  alternates: {
    canonical: "https://short-url-ochre-nine.vercel.app/contact",
  },
  openGraph: {
    title: "Contact | Short URL",
    description:
      "Get in touch with Short URL. Secure and reliable URL shortener support.",
    url: "https://short-url-ochre-nine.vercel.app/contact",
    siteName: "Short URL",
    images: [
      {
        url: "/images.png",
        width: 512,
        height: 512,
        alt: "Short URL Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Short URL",
    description: "Reach out to Short URL via email, WhatsApp, or GitHub.",
    images: ["/images.png"],
    creator: "@ShortURL",
  },
};

const Profile =
  "https://images.unsplash.com/photo-1756180818564-97d9d8afa7af?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0";

function Contact() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Optimized Background Image */}
      <Image
        src={Profile}
        alt="Background"
        fill
        loading="eager"
        priority
        className="object-cover brightness-50 blur-sm"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-10 text-center border border-white/20 mt-20 mb-5">
        <h1 className="text-4xl font-bold text-amber-400 mb-6">
          Contact <span className="text-white">Me</span>
        </h1>

        <p className="text-lg mb-6">
          Feel free to reach out through any of the platforms below. I’d love to
          hear from you!
        </p>

        <div className="space-y-4 text-lg">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:khandaulathassankhan@gmail.com"
              className="text-amber-400 hover:underline"
            >
              Email
            </a>
          </p>
          <p>
            💬 WhatsApp:{" "}
            <a
              href="https://wa.me/923354232380"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              WhatsApp
            </a>
          </p>
          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/hassankhan931"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              Visit My GitHub
            </a>
          </p>
          <p>
            🌐 Portfolio:{" "}
            <a
              href="https://hassan-khan-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              Visit My Website
            </a>
          </p>
        </div>

        {/* Back to Home */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-amber-400 text-black font-semibold rounded-lg shadow-md hover:bg-amber-300 transition"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
