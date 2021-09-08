import Head from "next/head";
import BestSeller from "../components/BestSeller/BestSeller";
import Blogs from "../components/Blogs/Blogs";
import Categories from "../components/Categories";
import Authors from "../components/Authors/Authors";
import UnreleasedBooks from "../components/UnreleasedBooks/UnreleasedBooks";
import TopRatedCarousel from "../components/TopRatedCarousel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bookworm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* samiha */}
      <TopRatedCarousel></TopRatedCarousel>

      {/* apel */}
      <BestSeller />

      {/* samiha */}
      <Categories />

      {/* apel */}
      <UnreleasedBooks />

      {/* opu */}
      <Blogs />

      {/* apel */}
      <Authors />
    </div>
  );
}
