import { Helmet } from "react-helmet";

const DOMAIN = "your_domain";  // Replace with your actual domain
const FAVICON_SOURCE = "path_to_your_favicon";  // Replace with the path to your favicon
const MAIN_KEYWORDS = "antik, Ankauf, Antikladen, Flensburg";
const DEFAULT_DESCRIPTION = "Antikladen in Flensburg. Hier finden Sie viele Objekte aus der Antike und anderen Epochen";
const DEFAULT_TITLE = "Antikladen und Ankauf von Antik in Flensburg und Umgebung";
const POSTFIX_TITLE = " Antikladen und Ankauf";

export default function CustomHelmet({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  link,
  keywords = [],
  noIndex,
  imageCard,
}) {
  const addPostfixTitle = true;  // You may want to adjust this based on your logic

  let metaTitle;

  if (addPostfixTitle) {
    metaTitle = title + POSTFIX_TITLE;
  } else {
    metaTitle = title;
  }

  const metaDesc = description;
  const metaLink = DOMAIN + link;

  const metaKeywords =
    keywords.length > 0 ? MAIN_KEYWORDS + "," + keywords.join(", ") : MAIN_KEYWORDS;

  let metaImageCard;

  if (imageCard && imageCard.startsWith("http")) {
    metaImageCard = imageCard;
  } else {
    metaImageCard = DOMAIN + imageCard;
  }

  const metaRobots = noIndex ? "noindex, nofollow" : "index, follow";

  return (
    <Helmet>
      <html lang="de" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={metaLink} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content={metaRobots} />
      <link rel="icon" href={FAVICON_SOURCE} />

      <meta property="og:url" content={metaLink} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={metaImageCard} />
    </Helmet>
  );
}
