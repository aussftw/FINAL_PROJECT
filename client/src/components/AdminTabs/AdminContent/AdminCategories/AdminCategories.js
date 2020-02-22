import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@material-ui/core";
import MaterialTable from "material-table";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";
import PreloaderAdaptive from "../../../Preloader/Adaptive";
import SnackbarMessage from "../../Snackbar/SnackbarMessage";
import AddEditCategoriesModal from "./AddEditCategoriesModal/AddEditCategoriesModal";


const AdminCategories = ({
                           AddModal,
                           setAddModal,
                           EditModal,
                           setEditModal,
                           DeleteModal,
                           setDeleteModal,
                           openSnackbar,
                           handleOpenSnackbar,
                           handleCloseSnackbar,
                           snackbarType,
                         }) => {

  const [categories, setCategories] = useState([]);

  const handleOpenAddModal = () => {
    setAddModal({
      isOpened: !AddModal.isOpened,
      rowData: AddModal.rowData,
    });
  };

  const handleDataEditModal = (rowData) => {
    setEditModal({
      isOpened: !EditModal.isOpened,
      rowData,
    });
  };
  const handleDeleteModal = (rowData) => {
    setDeleteModal({
      isOpened: !DeleteModal.isOpened,
      id: rowData.id,
    });
  };

  const closeModal = () => {
    setEditModal({
      isOpened: false,
      rowData: EditModal.rowData,
    });
    setAddModal({
      isOpened: false,
      rowData: AddModal.rowData,
    });
    setDeleteModal({
      isOpened: false,
      id: DeleteModal.id,
    });
  };

  const getCategories = () => {
    axios
      .get("/api/catalog")
      .then(orders => {
        setCategories(orders.data);
        console.log(orders.data);
      })
      .catch(err => {
        console.log("orders", err);
      });
  };

  useEffect(() => {
    getCategories();
  },[]);

  const columns = [
    {
      title: "Image",
      field: "imageUrl",
      render: rowData => <img alt={rowData.name} src={rowData.imgUrl} style={{ width: "50%" }} />,
    },
    { title: "Name", field: "name" },
    { title: "Description", field: "description" },
  ];

  const materialTable = () => {
    return (
      <MaterialTable
        columns={columns}
        data={categories}
        title="Categories"
        options={{ search: false }}
        actions={[
          {
            icon: () => <AddCircleIcon />,
            tooltip: "Add Category",
            isFreeAction: true,
            onClick: () => {
              handleOpenAddModal();
            },
          },
          {
            icon: () => <DeleteIcon />,
            tooltip: "Delete Category",
            onClick: (event, rowData) => {
              handleDeleteModal(rowData);
            },
          },
          {
            icon: () => <EditIcon />,
            tooltip: "Edit Category",
            onClick: (event, rowData) => {
              handleDataEditModal(rowData);
            },
          },
          {
            icon: "refresh",
            tooltip: "Refresh Data",
            isFreeAction: true,
            onClick: () => getCategories(),
          },
        ]}
      />
    );
  };

  return (
    <>
      {categories.length === 0 ? (
        <PreloaderAdaptive />
      ) : (
        <Box>
          {materialTable()}
          {AddModal.isOpened && (
            <AddEditCategoriesModal
              open={AddModal.isOpened}
              handleModal={closeModal}
              category={AddModal.rowData}
              handleOpenSnackbar={handleOpenSnackbar}
              autoRefresh={getCategories}
            />
          )}
          {EditModal.isOpened && (
            <AddEditCategoriesModal
              open={EditModal.isOpened}
              handleModal={closeModal}
              category={EditModal.rowData}
              handleOpenSnackbar={handleOpenSnackbar}
              autoRefresh={getCategories}
            />
          )}
          {DeleteModal.isOpened && (
            <DeleteItemModal
              open={DeleteModal.isOpened}
              handleModal={closeModal}
              id={DeleteModal.id}
              item="catalog"
              handleOpenSnackbar={handleOpenSnackbar}
              autoRefresh={getCategories}
            />
          )}
          <SnackbarMessage openSnackbar={openSnackbar} handleCloseSnackbar={handleCloseSnackbar} type={snackbarType} />
        </Box>
      )}
    </>
  );
};

export default AdminCategories;
