import React, { useEffect, useContext } from "react";
import classes from "./blog.module.css";
import Button from "../../components/button/Button";
import CardBlog from "../../components/cardBlog/CardBlog";
import DataContext from "../../context/DataContext";

const Blog = () => {
  const { data, getData } = useContext(DataContext);
  useEffect(() => {
    getData();
  }, [])

  return (
    <section className={classes.blog} id="blog">
      <div className={classes.blog__heading}>
        <h2>Latest Articles</h2>
        <Button text="+ Add New Article" href={"/add-new-article"}/>
      </div>
      <div className={classes.blog__content}>
        {data &&
          data
            .slice(0, 4)
            .map((card, i) => (
              <CardBlog
                image={card.image_url}
                title={card.title}
                author={card.author}
                content={card.content}
                key={i}
              />
            ))}
      </div>
    </section>
  );
};

export default Blog;
