import React, { useReducer } from "react";
import DataReducer from "./DataReducer";
import DataContext from "./DataContext";
import axios from "axios";

const DataState = (props) => {
  const initialState = {
    data: [],
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://servicepad-post-api.herokuapp.com/articles/"
      );
      dispatch({
        type: "GET_DATA",
        payload: res.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const postData = async (enteredData) => {
    try {
      dispatch({
        type: "POST_DATA",
        payload: enteredData,
      });
      const res = await axios.post(
        "https://servicepad-post-api.herokuapp.com/articles/",
        {
          method: "POST",
          body: JSON.stringify(enteredData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const updateData = async (editedData, id) => {
    const res = await axios.put(
      "https://servicepad-post-api.herokuapp.com/articles/" + id,
      {
        method: "PUT",
        body: JSON.stringify({
          author: editedData.author,
          content: editedData.content,
          title: editedData.title,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "PUT_DATA",
      payload: {
        editedData,
        index,
      },
    });
  };

  return (
    <DataContext.Provider
      value={{
        data: state.data,
        getData,
        postData,
        updateData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
