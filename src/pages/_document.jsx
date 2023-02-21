import { Html, Main, Head, NextScript } from "next/document";
// import Head from 'next/head';
<Head>
  {/* Primary Meta Tags */}
  <title>Humanist Centre for Medicine</title>
  <meta name="title" content="Humanist Centre for Medicine" />
  <meta
    name="description"
    content="Humanist aims to bridge the funding gap for cancer patients who cannot fully afford treatment. It is a not-for-profit company. Every donation makes a difference in the lives of people who need support."
  />
  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://humanist.org.in" />
  <meta property="og:title" content="Humanist Centre for Medicine" />
  <meta
    property="og:description"
    content="Humanist aims to bridge the funding gap for cancer patients who cannot fully afford treatment. It is a not-for-profit company. Every donation makes a difference in the lives of people who need support."
  />
  <meta property="og:image" content="/logo.png" />
  {/* Twitter */}
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://humanist.org.in" />
  <meta property="twitter:title" content="Humanist Centre for Medicine" />
  <meta
    property="twitter:description"
    content="Humanist aims to bridge the funding gap for cancer patients who cannot fully afford treatment. It is a not-for-profit company. Every donation makes a difference in the lives of people who need support."
  />
  <meta property="twitter:image" content="/logo.png" />
</Head>
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <form
          name="contact"
          method="post"
          data-netlify="true"
          style={{ display: "none" }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="text" name="dialcode" />
          <input type="tel" name="phonenumber" />
          <textarea name="message"></textarea>
        </form>
      </body>
    </Html>
  );
}
