import React from "react";
import Layout from "../../src/components/Layout";
import AddNewArticle from "../../src/sections/addNew/addNewArticle";

const NewArticlePage = ({data}) => {
  return <AddNewArticle data={data}/>;
};

export default NewArticlePage;

export async function getStaticProps () {
  try {
    const res = await fetch("https://servicepad-post-api.herokuapp.com/articles/")
    const data = await res.json();
    return {
      props: {
        data
      },
      revalidate: 1,
    };
  } catch(err) {
    console.log(err);
  }
}
