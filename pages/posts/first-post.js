import Link from "next/link";
import React from "react";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function firstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  );
}
