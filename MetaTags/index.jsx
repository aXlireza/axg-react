export default function MetaTags({
  description,
  href,
  title,
  ico,
  largeIco,
  locale = "en_US"
}) {
  return (
    <>
      <meta name="description" content={description}/>
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
      <link rel="canonical" href={href} />
            
      {/* icon */}
      <link rel="icon" href={ico} />
      <link rel="icon" href={ico} sizes="32x32" />
      <link rel="icon" href={largeIco || ico} sizes="192x192" />
      <link rel="apple-touch-icon" href={largeIco || ico} />
      <meta name="msapplication-TileImage" content={largeIco || ico} />

      {/* twitter */}
      <meta name="twitter:card" content="app" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={largeIco || ico} />

      {/* og */}
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={href} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={largeIco || ico} />
      <meta property="og:image:secure_url" content={largeIco || ico} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="519" />
    </>
  )
}