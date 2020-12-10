import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;650&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          css={{
            backgroundColor: "#fefefd",
            backgroundImage: "url(/texture.jpg)",
            backgroundSize: "1200px auto",
            backgroundPosition: "50% 50%",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
