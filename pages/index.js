import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import BestSeller from "../components/BestSeller/BestSeller";
import Blogs from "../components/Blogs/Blogs";
import Categories from "../components/Categories";
import Authors from "../components/Authors/Authors";
import TopRatedCarousel from "../components/TopRatedCarousel";
import ForeignBooks from "./../components/ForeignBooks/ForeignBooks";
import UnreleasedBooks from "./../components/UnreleasedBooks/UnreleasedBooks";
import Footer from "../components/Footer";

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

      {/* opu */}
      <ForeignBooks />

      {/* apel */}
      <UnreleasedBooks />

      {/* opu */}
      <Blogs />

      {/* apel */}
      <Authors />
    </div>
  );
}
