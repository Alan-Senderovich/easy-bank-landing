import React, { useContext } from "react";
import Form from "../../components/form/Form";
import Blog from "../blog/blog";
import Table from "../../components/table/Table";
import classes from "./addNewArticle.module.css";
import DataContext from "../../context/DataContext";

const AddNewArticle = () => {
  const { data, getData, postData } = useContext(DataContext);
  
  async function addArticleHandler(enteredArticleData) {
    postData(enteredArticleData)
  }

  return (
    <div className={classes.addNewArticle}>
      <div className={classes.addNewArticle__heading}>
        <h2>Add New Blog Article</h2>
        <p>Publish a new blog article to feature in the Easybank homepage.</p>
      </div>
      <Form onAddArticle={addArticleHandler} />
      <Table />
      <Blog />
    </div>
  );
};

export default AddNewArticle;
