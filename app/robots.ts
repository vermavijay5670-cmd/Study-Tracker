import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/auth/", "/api/"],
    },
    sitemap: "https://study-tracker-green-nine.vercel.app/sitemap.xml",
  };
}
