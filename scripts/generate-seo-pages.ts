import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { agencyConfig } from "../src/config/data";
import { absoluteUrl, siteSeo } from "../src/config/seo";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(rootDir, "dist");
const templatePath = join(distDir, "index.html");
const template = readFileSync(templatePath, "utf8");

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/process", priority: "0.7", changefreq: "monthly" },
  { path: "/portfolio", priority: "0.8", changefreq: "monthly" },
  { path: "/offers", priority: "0.8", changefreq: "weekly" },
  ...agencyConfig.offers.map((offer) => ({
    path: `/offers/${offer.id}`,
    priority: "0.7",
    changefreq: "monthly",
  })),
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  ...agencyConfig.blog.map((post) => ({
    path: `/blog/${post.id}`,
    priority: "0.6",
    changefreq: "monthly",
  })),
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
];

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function replaceMeta(html: string, route: { title: string; description: string; path: string; type: string }) {
  const url = absoluteUrl(route.path);
  const meta = {
    title: `${route.title} | ${siteSeo.name}`,
    description: route.description,
    url,
    image: siteSeo.image,
    type: route.type,
  };

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${meta.url}" />`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(meta.description)}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(meta.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeHtml(meta.description)}" />`)
    .replace(/<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="${meta.type}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${meta.url}" />`)
    .replace(/<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${meta.image}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`)
    .replace(/<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${meta.image}" />`);
}

for (const post of agencyConfig.blog) {
  const routeDir = join(distDir, "blog", post.id);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(
    join(routeDir, "index.html"),
    replaceMeta(template, {
      title: post.ge.title,
      description: post.ge.desc,
      path: `/blog/${post.id}`,
      type: "article",
    }),
    "utf8",
  );
}

const lastmod = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Tbilisi",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(
    (route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(distDir, "sitemap.xml"), sitemap, "utf8");
writeFileSync(join(rootDir, "public", "sitemap.xml"), sitemap, "utf8");
