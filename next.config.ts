import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repositoryBasePath = '/ti-sevis-website';

const nextConfig: NextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  assetPrefix: isGitHubPages ? repositoryBasePath : '',
  // Vinext's static prerenderer requests route paths without a slash. Keep
  // that canonical form for the export, then the Pages preparation script
  // adds index.html copies so GitHub Pages can serve friendly /route/ URLs.
  trailingSlash: isGitHubPages ? false : undefined,
};

export default nextConfig;
