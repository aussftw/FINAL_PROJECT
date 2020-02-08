import React, { useState } from "react";
import axios from "axios";
import { Box } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import MaterialTable from "material-table";
import AddPartnerModal from "./AddPartnerModal/AddPartnerModal";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal"


const AdminPartners = () => {
  const [ordersArr, setOrdersArr] = useState([]);
  const [AddModal, setAddModal] = useState({ isOpened: false, rowData: null });
  const [EditModal, setEditModal] = useState({ isOpened: false, rowData: {} });
  const [DeleteModal, setDeleteModal] = useState({ isOpened: false, id: "" });

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
      })
      .catch(err => {
        console.log("orders", err);
      });
  };

  const columns = [
    {
      title: "Logo",
      field: "imageUrl",
      render: rowData => <img alt={rowData.name} src={rowData.imageUrl} style={{ maxHeight: "50px" }} />,
    },
    { title: "Name", field: "name" },
    { title: "Url", field: "url", render: rowData => <a href={rowData.url}>{rowData.url}</a> },
    { title: "Enabled", field: "enabled" },

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
        ]}
      />
    );
  };

  return (
    <>
      <Button variant="contained" onClick={getPartners}>
        Get all partners
      </Button>

      {ordersArr.length === 0 ? (
        <div />
      ) : (
        <Box>
          {materialTable()}
          {AddModal.isOpened &&
          <AddPartnerModal open={AddModal.isOpened} handleModal={closeModal} partner={AddModal.rowData} />}
          {EditModal.isOpened &&
          <AddPartnerModal open={EditModal.isOpened} handleModal={closeModal} partner={EditModal.rowData} />}
          {DeleteModal.isOpened &&
          <DeleteItemModal open={DeleteModal.isOpened} handleModal={closeModal} id={DeleteModal.id} item="partners" />}
        </Box>
      )}
    </>
  );
};

export default AdminPartners;
