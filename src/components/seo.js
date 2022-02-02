import React from "react";
import Head from "next/head";

export default function SEO({
  description = "Kido Dynamics leverages mobile phone data, the most massive and accurate proxy to understand people’s mobility.",
  author = "Kido Dynamics",
  meta,
  title = "Kido Dynamics - Understanding People's Mobility Behaviour",
  keywords = "mobility, big data, insights",
  url = "https://www.kidodynamics.com/",
  image = "/assets/metatag.png",
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      name: `title`,
      content: title,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:url`,
      content: url,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:image`,
      content: image,
    },
    {
      name: `keywords`,
      content: keywords,
    },
    {
      property: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      property: `twitter:url`,
      content: url,
    },
    {
      property: `twitter:title`,
      content: title,
    },
    {
      property: `twitter:description`,
      content: description,
    },
    {
      property: `twitter:creator`,
      content: author,
    },
    {
      property: `twitter:image`,
      content: image,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ property, name, content }, i) =>
        property ? (
          <meta property={property} content={content} key={name} />
        ) : (
          <meta name={name} content={content} key={name} />
        )
      )}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
