import type { NextPage } from "next";
import Head from "next/head";
import CustomNav from "../components/CustomNav";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ahmad Sandid | Home</title>
        <meta
          name="description"
          content="A full-stack portfolio for the Full-Stack Engineer, Ahmad Sandid, showcasing a variety of projects as well as personal art works."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CustomNav />
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Create <span className="text-purple-300">T3</span> App
        </h1>
        <p className="text-2xl text-gray-700">This stack uses:</p>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3"></div>
      </main>
    </>
  );
};

export default Home;
