import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md border-t border-amber-400/30 text-center py-6">
      <p className="text-gray-300 text-sm tracking-wide">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-amber-400">ShortURL</span>. All
        rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
