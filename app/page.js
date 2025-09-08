"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const pic =
  "https://images.unsplash.com/photo-1755378988619-216a5a111e0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg0fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D";

function Page() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Optimized Background Image */}
      <Image
        src={pic}
        alt="Home background"
        fill
        loading="eager"
        priority
        className="object-cover blur-sm brightness-50"
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center max-w-2xl px-6 mt-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-amber-400">Short URL</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Simplify your links, track your clicks, and share with confidence. The
          professional way to shorten URLs.
        </p>
        <Link
          href="/shorten"
          className="inline-block bg-amber-400 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-amber-500 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Page;
