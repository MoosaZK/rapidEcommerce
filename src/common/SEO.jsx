import Head from "next/head";
import PropTypes from "prop-types";

function SEO({ title, desc, route }) {
  const baseUrl = "https://www.dummy.com";
  const keywords = "lorem,ipsum,uuuodgn,odgg,aiejp";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum quis erat sit amet dictum. Suspendisse venenatis ac urna nec convallis. Aenean nec eros dolor. Cras sed purus ut nibh rhoncus euismod. Nulla a tristique nisi.";
  const ogImage = {
    url: "/img/cover-l3.png",
    alt: "dummy - image",
  };

  return (
    <Head>
      <title>{`${title} — dummy web`}</title>
      <meta name="description" content={desc || description} />
      <link rel="canonical" href={`${baseUrl}${route}`} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}${route}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc || description} />
      <meta property="og:image" content={ogImage.url} />
      <meta property="og:image:alt" content={ogImage.alt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={baseUrl} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://twitter.com/dummyaccount123`}
      />
      <meta name="twitter:creator" content="@dummy1234" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc || description} />
      <meta property="twitter:image" content={ogImage.url} />
      <meta name="application-name" content={baseUrl} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="dummy company" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};
export default SEO;
