import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Partnered from "../components/Partnered/Partnered";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Partnered />
    </div>
  );
}
