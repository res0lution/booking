import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main";
import { wrapper } from "../redux/store";
import { getRooms } from "../redux/actions/roomActions";

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Best Hotels for your Holiday</title>
      </Head>

      <Layout>
        <Main />
      </Layout>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps( (store) =>
  async ({ req, query }) => { await store.dispatch(getRooms(req, query.page, query.location, query.guests, query.category)) }
);
