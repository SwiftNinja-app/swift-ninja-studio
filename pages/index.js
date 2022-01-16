import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Swift Ninja - Online Swift Playground</title>
      </Head>
      <Container></Container>
    </Layout>
  );
}