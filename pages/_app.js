import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* meta tags for SEO */}
    <Head>
      <meta name="description" content="The web offer <b>free ingredients and step-by-step cooking tutorial</b>, also encourage everyone to explore and discover new things." />
      <meta name="keywords" content="Recipe, Cooking, ingredients list " />
      <meta name="author" content="Lebasora, John Jefferson ; Paranas , Christian ; Luigi, Loreno" />
      <meta name="robots" content="index, follow" />
      <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@bf7775b/css/all.css" rel='stylesheet' type='text/css' />
      {/* avoid fontawesome icon to load it default size */}
      <style>{dom.css()}</style>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
