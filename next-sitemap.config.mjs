const config = {
  siteUrl: "https://mikea.md",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/old/*", "/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/old/", "/api/"],
        allow: "/",
      },
    ],
  },
  additionalPaths: async () => [
    {
      loc: "/ru",
      changefreq: "monthly",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/ro",
      changefreq: "monthly",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
  ],
};

export default config;
