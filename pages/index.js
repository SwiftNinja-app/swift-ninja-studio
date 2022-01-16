import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import SplitPanel from "../components/splitPanel";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Swift Ninja - Online Swift Playground</title>
      </Head>
      <Container>
        <SplitPanel></SplitPanel>
      </Container>
    </Layout>
  );
}