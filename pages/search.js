import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Search from "../components/Search";

export default function Home() {
  return (
    <>
      <Head>
        <title>Search Rooms</title>
      </Head>

      <Layout>
        <Search />
      </Layout>
    </>
  );
}
