import Head from "next/head";
import NewPassword from "../../../components/User/NewPassword";
import Layout from "../../components/Layout/Layout";

export default function ForgotPasswordPage() {
  return (
    <>
      <Head>
        <title>Reset Password</title>
      </Head>

      <Layout>
        <NewPassword />
      </Layout>
    </>
  );
}
