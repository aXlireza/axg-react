export default function MetaTags({
  description,
  href,
  title,
  ico,
  largeIco,
  locale = "en_US",
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} key={"description"} />
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"robots"} />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"googlebot"} />
	    <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" key={"bingbot"} />
      <link rel="canonical" href={href} key={"canonical"} />
            
      {/* icon */}
      <link rel="icon" href={ico} key={"icon"} />
      <link rel="icon" href={ico} sizes="32x32" key={"icon32"} />
      <link rel="icon" href={largeIco || ico} sizes="192x192" key={"icon192"} />
      <link rel="apple-touch-icon" href={largeIco || ico} key={"apple-touch-icon"} />
      <meta name="msapplication-TileImage" content={largeIco || ico} key={"msapplication-TileImage"} />

      {/* twitter */}
      <meta name="twitter:card" content="app" key={"twitter:card"} />
      <meta name="twitter:description" content={description} key={"twitter:description"} />
      <meta name="twitter:image" content={largeIco || ico} key={"twitter:image"} />

      {/* og */}
      <meta property="og:locale" content={locale} key={"og:locale"} />
      <meta property="og:type" content="website" key={"og:type"} />
      <meta property="og:description" content={description} key={"og:description"} />
      <meta property="og:url" content={href} key={"og:url"} />
      <meta property="og:site_name" content={title} key={"og:site_name"} />
      <meta property="og:image" content={largeIco || ico} key={"og:image"} />
      <meta property="og:image:secure_url" content={largeIco || ico} key={"og:image:secure_url"} />
      <meta property="og:image:width" content="1280" key={"og:image:width"} />
      <meta property="og:image:height" content="519" key={"og:image:height"} />
    </>
  )
}