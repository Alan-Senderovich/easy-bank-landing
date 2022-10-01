import Document, { Head, Html, Main, NextScript } from "next/document";
import { appConfig } from "../src/constants/appConfig";
// import { appConfig } from "constants/appConfig";

/**
 * Document class
 * @class
 */
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  /**
   * Render method
   * @method
   * @returns {JSX.Element}
   **/
  render() {
    return (
      <Html lang={appConfig.locale}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
