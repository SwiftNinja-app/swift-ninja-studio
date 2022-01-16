import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/splitPanel'),
  { ssr: false }
)

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Swift Ninja - Online Swift Playground</title>
      </Head>
      <Container>
        <DynamicComponentWithNoSSR/>
      </Container>
    </Layout>
  );
}