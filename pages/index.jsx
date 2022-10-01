import Head from "next/head";
import Image from "next/image";
import { appConfig } from "../src/constants/appConfig";
import Layout from "../src/components/Layout";
import Banner from "../src/sections/banner/banner";
import About from "../src/sections/about/about";
import Blog from "../src/sections/blog/blog";


// import globalCss from "../"

export default function Home({data}) {
  return (
    <>
      <Banner />
      <About />
      <Blog data={data}/>
    </>
  );
}