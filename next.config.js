/** @type {import('next').NextConfig} */
const nextConfig = {
  // Deployed on Vercel (not a static export) so we can use API routes
  // (e.g. the lead form) and image optimization.
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  // Legacy single-guide pages migrated into the Registration/Tax articles.
  // 301 to preserve their accrued SEO equity.
  async redirects() {
    const legal = '/blog/company-legal-forms-north-macedonia';
    const process = '/blog/how-to-register-company-north-macedonia';
    const map = {
      '/doo': legal,
      '/dooel': legal,
      '/pdoo': legal,
      '/ad': legal,
      '/sole-proprietor': legal,
      '/branch': legal,
      '/llc-registration': legal,
      '/process': process,
      '/documents': process,
      '/cost': process,
      '/timeline': process,
      '/for-foreigners': '/blog/register-company-as-foreigner',
      '/taxes': '/blog/company-taxes-north-macedonia',
    };
    return Object.entries(map).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

module.exports = nextConfig;
