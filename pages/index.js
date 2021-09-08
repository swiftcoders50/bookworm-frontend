import Head from "next/head";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Bookworm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Categories />
    </div>
  );
}
