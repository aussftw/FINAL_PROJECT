import React, {useRef, useState} from "react";
import MaterialTable from "material-table";
import * as axios from "axios";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

import CommentModal from "./CommentModal/CommentModal";

const AdminComments = () => {
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [oneCommentData, setOneCommentData] = useState(null);
  const tableRef = useRef(null);

  const refresh = () => {
      tableRef.current.onQueryChange()
  };

    const openModalHandler = data => {
    setOneCommentData(data);
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  const deleteConfirmOpenHandler = data => {
    setOneCommentData(data);
    setDeleteConfirmOpen(true);
  };

  const deleteConfirmCloseHandler = () => {
    setDeleteConfirmOpen(false);
  };

  const columns = [
    {
      title: "Product Name",
      field: "product.name",
      type: "string",
      headerStyle: { minWidth: "150px" },
    },
    {
      title: "Customer",
      field: "customer.login",
      type: "string",
      // headerStyle: { minWidth: "600px" },
    },
    { title: "Date", field: "date", type: "date" },
    {
      title: "Comment",
      field: "content",
      type: "string",
      headerStyle: { minWidth: "600px" },
    },
  ];

  const deleteHandler = () => {
    axios
      .delete(`/api/comments/${oneCommentData._id}`)
      .then(response => {
        deleteConfirmCloseHandler();
        refresh();
        // eslint-disable-next-line no-console
        console.log(response.data.message);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err.response);
      });
  };

  return (
    <Box>
      <MaterialTable
        columns={columns}
        tableRef={tableRef}
        actions={[
          {
            icon: "delete",
            tooltip: "Delete this comment",
            onClick: (event, rowData) => {
              deleteConfirmOpenHandler(rowData);
            },
          },
          {
            icon: "edit",
            tooltip: "Edit this comment",
            onClick: (event, rowData) => {
              openModalHandler(rowData);
            },
          },
            {
            icon: 'refresh',
            tooltip: 'Refresh Data',
            isFreeAction: true,
            onClick: () => tableRef.current && tableRef.current.onQueryChange(),
            }
        ]}
        title="Comments"
        options={{ search: false }}
        data={query =>
          new Promise((resolve, reject) => {
            const url = `/api/comments?perPage=${query.pageSize}&startPage=${query.page + 1}`;
            axios
              .get(url)
              .then(response => {
                resolve({
                  data: response.data.comments,
                  page: response.data.page - 1,
                  totalCount: response.data.total,
                });
              })
              .catch(err => {
                  const reason = new Error('It looks like we have a problem');
                  reject(reason); // reject
                // eslint-disable-next-line no-console
                console.log(err.response);
              });
          })}
      />
      <CommentModal
        data={oneCommentData}
        isOpen={modalIsOpen}
        onClose={() => {
          closeModalHandler();
        }}
        refresh={refresh}
      />
      <Dialog open={deleteConfirmOpen} onClose={deleteConfirmCloseHandler}>
        <DialogTitle id="alert-dialog-title">
          Are you sure to delete this comment?
        </DialogTitle>
        <DialogActions>
          <Button onClick={deleteConfirmCloseHandler} color="primary">
            Disagree
          </Button>
          <Button onClick={deleteHandler} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminComments;
