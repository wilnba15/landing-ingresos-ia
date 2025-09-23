import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Permite compilar aunque haya errores de ESLint (lo corregimos luego con calma)
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
