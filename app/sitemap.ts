import type { MetadataRoute } from "next";

const baseUrl = "https://navolt.se";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/bat", priority: 0.9 },
    { path: "/campervan", priority: 0.9 },
    { path: "/motorservice", priority: 0.8 },
    { path: "/batrutor", priority: 0.8 },
    { path: "/galleri", priority: 0.6 },
    { path: "/kontakt", priority: 0.7 },
  ];

  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
