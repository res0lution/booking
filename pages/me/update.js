import React from "react";
import Head from "next/head";
import { getSession } from "next-auth/client";
import Layout from "../../components/Layout/Layout";
import Profile from "../../components/User/Profile";

const UpdateProfilePage = () => {
  return (
    <>
      <Head>
        <title>Update Profile</title>
      </Head>

      <Layout>
        <Profile />
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permament: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default UpdateProfilePage;
