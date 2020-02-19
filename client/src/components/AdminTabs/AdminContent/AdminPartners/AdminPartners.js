import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import MaterialTable from "material-table";
import AddEditPartnerModal from "./AddEditPartnerModal/AddEditPartnerModal";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";
import PreloaderAdaptive from "../../../Preloader/Adaptive";
import SnackbarMessage from "../../Snackbar/SnackbarMessage";


const AdminPartners = ({
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
  const [ordersArr, setOrdersArr] = useState([]);

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
      id: rowData.customId,
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

  const getPartners = () => {
    axios
      .get("/api/partners")
      .then(orders => {
        setOrdersArr(orders.data);
        console.log(orders.data);
      })
      .catch(err => {
        console.log("orders", err);
      });
  };

  useEffect(() => {
    getPartners();
  },[]);

  const columns = [
    {
      title: "Logo",
      field: "imageUrl",
      render: rowData => <img alt={rowData.name} src={rowData.imageUrl} style={{ maxHeight: "50px" }} />,
    },
    { title: "Name", field: "name" },
    { title: "Url", field: "url", render: rowData => <a href={rowData.url}>{rowData.url}</a> },
    // { title: "Enabled", field: "enabled" },

  ];

  const materialTable = () => {
    return (
      <MaterialTable
        columns={columns}
        data={ordersArr}
        title="Our partners"
        options={{ search: false }}
        actions={[
          {
            icon: () => <AddCircleIcon />,
            tooltip: "Add Partner",
            isFreeAction: true,
            onClick: () => {
              handleOpenAddModal();
            },
          },
          {
            icon: () => <DeleteIcon />,
            tooltip: "Delete Partner",
            onClick: (event, rowData) => {
              handleDeleteModal(rowData);
            },
          },
          {
            icon: () => <EditIcon />,
            tooltip: "Edit Partner",
            onClick: (event, rowData) => {
              handleDataEditModal(rowData);
            },
          },
          {
            icon: "refresh",
            tooltip: "Refresh Data",
            isFreeAction: true,
            onClick: () => getPartners(),
          },
        ]}
      />
    );
  };

  return (
    <>
      {ordersArr.length === 0 ? (
        <PreloaderAdaptive />
      ) : (
        <Box>
          {materialTable()}
          {AddModal.isOpened && (
            <AddEditPartnerModal
              open={AddModal.isOpened}
              handleModal={closeModal}
              partner={AddModal.rowData}
              handleOpenSnackbar={handleOpenSnackbar}
              autoRefresh={getPartners}
            />
          )}
          {EditModal.isOpened && (
            <AddEditPartnerModal
              open={EditModal.isOpened}
              handleModal={closeModal}
              partner={EditModal.rowData}
              handleOpenSnackbar={handleOpenSnackbar}
              autoRefresh={getPartners}
            />
          )}
          {DeleteModal.isOpened && (
            <DeleteItemModal
              open={DeleteModal.isOpened}
              handleModal={closeModal}
              id={DeleteModal.id}
              item="partners"
              handleOpenSnackbar={handleOpenSnackbar}
              autoRefresh={getPartners}
            />
          )}
          <SnackbarMessage openSnackbar={openSnackbar} handleCloseSnackbar={handleCloseSnackbar} type={snackbarType} />
        </Box>
      )}
    </>
  );
};

export default AdminPartners;
