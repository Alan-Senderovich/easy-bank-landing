import "../src/styled/global.css";
import Layout from "../src/components/Layout";
import { BrowserRouter } from "react-router-dom";
import DataState from "../src/context/DataState";

function MyApp({ Component, pageProps }) {
  return (
    <DataState>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataState>
  );
}

export default MyApp;
