import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://navolt.se/sitemap.xml",
    host: "https://navolt.se",
  };
}
