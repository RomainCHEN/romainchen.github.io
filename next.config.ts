import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // GitHub Pages serves plain files: emit a fully static site.
  output: 'export',
  // Emit /about/index.html rather than /about.html so URLs work without a rewrite layer.
  trailingSlash: true,
  images: {
    // next/image's optimizer needs a server; static export has none.
    unoptimized: true,
  },
};

export default nextConfig;
