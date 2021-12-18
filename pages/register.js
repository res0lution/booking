import Head from "next/head";
import Register from "../components/Auth/Register";
import Layout from "../components/Layout/Layout";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <Layout>
        <Register />
      </Layout>
    </>
  );
}
