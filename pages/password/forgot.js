import Head from "next/head";
import ForgotPassword from "../../components/User/ForgotPassword";
import Layout from "../components/Layout/Layout";

export default function ForgotPasswordPage() {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>

      <Layout>
        <ForgotPassword />
      </Layout>
    </>
  );
}
