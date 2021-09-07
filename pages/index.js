import Head from "next/head";
import Header from "../components/Navbar/Navbar";
import Navbar from "../components/Navbar/testData";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <Navbar />
    </div>
  );
}
