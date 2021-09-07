import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import TestData from "../components/Navbar/TestData";

export default function Home() {
  return (
    <div>
      <Navbar />
      <TestData />
    </div>
  );
}
