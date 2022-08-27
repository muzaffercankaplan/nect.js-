import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Directory() {
  return (
    <>
      <Head>
        <title>Directory</title>
      </Head>

      <h1>
        <Link href="/">Back Home</Link>
      </h1>
    </>
  );
}
