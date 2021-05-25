import Head from "next/head";

const Head = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Web Portofolio Rama Seftiansyah" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Head;
