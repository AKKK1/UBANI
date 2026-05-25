export const siteSeo = {
  url: "https://ubani.website",
  name: "UBANI",
  title: "საიტის დამზადება საქართველოში | ვებ დეველოპმენტი, SEO და AI",
  description:
    "ევროპული სტანდარტის ციფრული სააგენტო საქართველოში. ვქმნით სწრაფ ბიზნეს საიტებს, ონლაინ მაღაზიებს, ვებ აპლიკაციებს, SEO სტრატეგიას და AI ინტეგრაციებს.",
  image: "https://ubani.website/brand/ubani-og-preview.png",
  locale: "ka_GE",
  twitterCard: "summary_large_image",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteSeo.url).toString();
}
