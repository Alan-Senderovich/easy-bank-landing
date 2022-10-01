import React, { useContext, useEffect, Fragment, useState } from "react";
import classes from "./Table.module.css";
import DataContext from "../../context/DataContext";
import _ from "lodash";

const Table = () => {
  const pageSize = 6;
  const { data, getData, updateData } = useContext(DataContext);
  const [editRowId, setEditRowId] = useState(null);
  const [paginatedData, setPaginatedData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPaginatedData(_(data).slice(0).take(pageSize).value());
  }, [data]);

  const pageCount = data ? Math.ceil(data.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const [addFormData, setAddFormData] = useState({
    author: "",
    title: "",
    content: "",
    date: "",
  });

  const [editFormData, setEditFormData] = useState({
    author: "",
    title: "",
    content: "",
    date: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const handleEditClick = (event, row) => {
    event.preventDefault();
    setEditRowId(row.id);

    const formValues = {
      author: row.author,
      title: row.title,
      content: row.content,
      date: row.date,
    };
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedRow = {
      id: editRowId,
      author: editFormData.author,
      title: editFormData.title,
      content: editFormData.content,
      date: editFormData.date,
    };

    const newData = [...data];

    const index = data.findIndex((item) => item.id === editRowId);

    newData[index] = editedRow;

    updateData(editedRow, editRowId);
  };

  const pagination = (pageNro) => {
    setCurrentPage(pageNro);
    const startIndex = (pageNro - 1) * pageSize;
    const paginatedData = _(data).slice(startIndex).take(pageSize).value();
    setPaginatedData(paginatedData);
  }

  return (
    <div className={classes.table}>
      <div className={classes.table__heading}>
        <h2>Previous Articles</h2>
        <p>Review and edit previous blog posts published on to the homepage.</p>
      </div>
      <div className={classes.table__container}>
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr className={classes.table__row}>
                <th>author name</th>
                <th>title</th>
                <th>content</th>
                <th>date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {paginatedData &&
                paginatedData.map((item) => (
                  <>
                    {editRowId === item.id ? (
                      <Fragment>
                        {/* EDITABLE ROW */}
                        <tr>
                          <td className={classes.table__td_author}>
                            <input
                              type="text"
                              required="required"
                              placeholder={item.author}
                              name="author"
                              value={editFormData.author}
                              onChange={handleEditFormChange}
                            />
                          </td>
                          <td className={classes.table__td}>
                            <input
                              type="text"
                              required="required"
                              placeholder={item.title}
                              name="title"
                              value={editFormData.title}
                              onChange={handleEditFormChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              required="required"
                              placeholder={item.content}
                              name="content"
                              value={editFormData.content}
                              onChange={handleEditFormChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              required="required"
                              placeholder={item.date}
                              name="date"
                              value={editFormData.date}
                              onChange={handleEditFormChange}
                            />
                          </td>
                          <td>
                            <button
                              className={classes.table__td_button_save}
                              type="submit"
                            >
                              Save
                            </button>
                          </td>
                        </tr>
                        {/* EDITABLE ROW */}
                      </Fragment>
                    ) : (
                      <Fragment>
                        <tr className={classes.table__row}>
                          <td className={classes.table__td_author}>
                            {item.author}
                          </td>
                          <td className={classes.table__td}>{item.title}</td>
                          <td>{item.content}</td>
                          <td>{item.date}</td>
                          <td className={classes.table__td_button_edit}>
                            <button
                              type="button"
                              onClick={(event) => handleEditClick(event, item)}
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      </Fragment>
                    )}
                  </>
                ))}
            </tbody>
          </table>
        </form>
        <nav className={classes.table__nav_pagination}>
          <ul>
            {pages.map((page) => (
              <li>
                <p onClick={() => pagination(page)}>{page}</p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Table;
