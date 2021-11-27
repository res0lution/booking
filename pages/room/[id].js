import Layout from "../../components/Layout/Layout";
import RoomDetails from "../../components/Room/RoomDetails";
import { wrapper } from "../../redux/store";
import { getRoomDetails } from "../../redux/actions/roomActions";
// import { Head } from "next/head";

export default function DetailsPage() {
  return (
    <>
      {/* <Head>
        <title>Property Details Page</title>
      </Head> */}

      <Layout>
        <RoomDetails />
      </Layout>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(getRoomDetails(req, params.id));
    }
);
