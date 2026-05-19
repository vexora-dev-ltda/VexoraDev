import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

// Use the repository name exactly as hosted on GitHub
const repoName = "VexoraDev";

const nextConfig: NextConfig = {
  // Use static export for GitHub Pages compatibility
  output: "export",
  // When deploying to GitHub Pages, set basePath and assetPrefix to repo name
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  // Other Next defaults
};

export default nextConfig;
