import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@material-ui/core";
import MaterialTable from "material-table";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";
import AddPartnerModal from "../AdminPartners/AddPartnerModal/AddPartnerModal";
import PreloaderAdaptive from "../../../Preloader/Adaptive";


const AdminCategories = () => {
  const [categories, setCategories] = useState([]);

  // imgUrl: "/img/catalog/Ficuses.png"
  // description: "Ficus is a genus of about 850 species of woody trees, shrubs, vines, epiphytes and hemiepiphytes in the family Moraceae. Collectively known as fig trees or figs, they are native throughout the tropics with a few species extending into the semi-warm temperate zone."
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
      id: rowData._id,
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
      })
      .catch(err => {
        console.log("orders", err);
      });
  };

  useEffect(() => {
    getCategories();
  });

  const columns = [
    {
      title: "Image",
      field: "imageUrl",
      render: rowData => <img alt={rowData.name} src={rowData.imgUrl} style={{ width: "50%" }} />,
    },
    { title: "Name", field: "name" },
    { title: "Description", field: "description" },
    // {
    //   title: "Description",
    //   field: "description",
    //   type: "string",
    //   render: rowData => (
    //     <Typography noWrap style={{ width: "200px", fontSize: "0.875rem"}}>
    //       {rowData.description}
    //     </Typography>
    //   ),
    // },

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
          {AddModal.isOpened &&
          <AddPartnerModal open={AddModal.isOpened} handleModal={closeModal} partner={AddModal.rowData} />}
          {EditModal.isOpened &&
          <AddPartnerModal open={EditModal.isOpened} handleModal={closeModal} partner={EditModal.rowData} />}
          {DeleteModal.isOpened &&
          <DeleteItemModal open={DeleteModal.isOpened} handleModal={closeModal} id={DeleteModal.id} item="catalog" />}
        </Box>
      )}
    </>
  );
};

export default AdminCategories;
