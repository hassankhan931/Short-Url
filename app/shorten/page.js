"use client";

import { useState } from "react";
import Image from "next/image";

const backgroundUrl =
  "https://images.unsplash.com/photo-1757005550139-e05b63ec88d9?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0";

export default function ShortenPage() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShortUrl("");
    setLoading(true);
    try {
      const res = await fetch("/api/convert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl }),
      });
      const data = await res.json();
      if (res.ok) {
        setShortUrl(data.shortUrl);
        setLongUrl("");
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundUrl}
        alt="Background"
        fill
        priority
        className="object-cover blur-sm brightness-50"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-10 text-white">
        <h1 className="text-4xl font-bold text-center mb-3 text-amber-400">
          URL Shortener
        </h1>
        <p className="text-center text-gray-200 mb-8">
          Paste your long link below and turn it into a short, shareable URL
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Enter Long URL
            </label>
            <input
              type="url"
              placeholder="https://example.com/very/long/link"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-400 text-gray-900 font-semibold py-3 rounded-lg shadow-lg hover:bg-amber-300 transition duration-300 cursor-pointer disabled:opacity-50"
          >
            {loading ? "Shortening..." : "Shorten Now"}
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <p className="mt-4 text-red-500 text-center text-sm font-semibold">
            {error}
          </p>
        )}

        {/* Display Short URL */}
        {shortUrl && (
          <div className="mt-8 p-4 bg-white/10 rounded-lg text-center border border-white/20">
            <p className="text-sm text-gray-300">Your shortened link 🔗</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-semibold underline mt-2 block"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
