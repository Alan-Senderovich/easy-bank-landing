import React, { useRef } from "react";
import classes from "./Form.module.css";
import Button from "../button/Button";

const Form = (props) => {
  const authorInputRef = useRef();
  const blogTitleInputRef = useRef();
  const blogContentInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredBlogTitle = blogTitleInputRef.current.value;
    const enteredBlogContent = blogContentInputRef.current.value;

    const articleData = {
      author: enteredAuthor,
      title: enteredBlogTitle,
      content: enteredBlogContent,
    };

    props.onAddArticle(articleData);

    authorInputRef.current.value = "";
    blogTitleInputRef.current.value = "";
    blogContentInputRef.current.value = "";
  }
  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.form__container}>
          <div className={classes.form__control}>
            <label htmlFor="author">Author</label>
            <input type="text" required id="author" ref={authorInputRef} />
          </div>
          <div className={classes.form__control}>
            <label htmlFor="blogTitle">Blog Title</label>
            <input
              type="text"
              required
              id="blogTitle"
              ref={blogTitleInputRef}
            />
          </div>
          <div className={classes.form__control}>
            <label htmlFor="blogContent">Blog Content</label>
            <textarea
              id="blogContent"
              required
              rows="5"
              ref={blogContentInputRef}
            ></textarea>
          </div>
          <Button text="Save" isFullWidth={true}/>
          {/* <div className={classes.actions}>
          <button>Save</button>
        </div> */}
        </div>
      </form>
    </>
  );
};

export default Form;
