import Head from 'next/head'
import Layout from '../components/Layout/Layout';
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Best Hotels for your Holiday</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Layout>
        <Main />
      </Layout>
    </>
  );
}
