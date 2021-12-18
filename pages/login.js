import Head from "next/head";
import Login from "../components/Auth/Login";
import Layout from "../components/Layout/Layout";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Layout>
        <Login />
      </Layout>
    </>
  );
}
