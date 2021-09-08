import Head from "next/head";
import Authors from "../components/Authors/Authors";
import BestSeller from "../components/BestSeller/BestSeller";
import UnreleasedBooks from "../components/UnreleasedBooks/UnreleasedBooks";
import TopRatedCarousel from "../components/TopRatedCarousel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* samiha */}
      <TopRatedCarousel></TopRatedCarousel>

      {/* apel */}
      <BestSeller />

      {/* apel */}
      <UnreleasedBooks />

      {/* apel */}
      <Authors />
    </div>
  );
}
