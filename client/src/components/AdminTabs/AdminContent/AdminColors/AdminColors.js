import React, { useState } from "react";
import axios from "axios";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MaterialTable from "material-table";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";
import AddEditModal from "./AddEditModal/AddEditModal";


const AdminColors = () => {
  const [colors, setColors] = useState([]);

  const [AddModal, setAddModal] = useState({ isOpened: false, rowData: null });
  const [EditModal, setEditModal] = useState({ isOpened: false, rowData: {} });
  const [DeleteModal, setDeleteModal] = useState({ isOpened: false, id: "" });

  // const modalInputs = () => {
  //   const valuesArr = Object.keys(colors[0]);
  //   const inputs = valuesArr.filter(word => word !== "_id" && word !== "date" && word !=="tableData" && word !== "__v");
  // }


  const getColors = () => {
    axios
      .get("/api/colors")
      .then(orders => {
        setColors(orders.data);
      })
      .catch(err => {
        console.log("orders", err);
      });
  };

  const handleOpenAddModal = () => {
    setAddModal({
      isOpened: !AddModal.isOpened,
      rowData: AddModal.rowData,
    });
  };

  const handleEditModal = (rowData) => {
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


    const deleteValidate = (rowData) => {
      axios
        .get(`/api/products/filter?color=${rowData.name}`)
        .then(orders => {
          console.log("orders.data.length", orders.data.products.length);
          if (orders.data.products.length === 0) {
            handleDeleteModal(rowData);
          } else {
            console.log("you cant edit/delete color because of active products in catalog");
          }
        })
        .catch(err => {
          console.log("orders", err);
        });

    };

    const editValidate = (rowData) => {
      axios
        .get(`/api/products/filter?color=${rowData.name}`)
        .then(orders => {
          console.log(orders);
          console.log("orders.data.products.length", orders.data.products.length);
          if (orders.data.products.length === 0) {
            handleEditModal(rowData);
          } else {
            console.log("cant edit");
          }
        })
        .catch(err => {
          console.log("orders", err);
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


  const columns = [
    { title: "Name", field: "name" },
  ];

  const materialTable = () => {
    return (
      <MaterialTable
        columns={columns}
        data={colors}
        title="Colors"
        options={{ search: false }}
        actions={[
          {
            icon: () => <AddCircleIcon />,
            tooltip: "Add color",
            isFreeAction: true,
            onClick: () => {
              handleOpenAddModal();
            },
          },
          {
            icon: () => <DeleteIcon />,
            tooltip: "Delete color",
            onClick: (event, rowData) => {
              deleteValidate(rowData);
            },
          },
          {
            icon: () => <EditIcon />,
            tooltip: "Edit color",
            onClick: (event, rowData) => {
              editValidate(rowData);
            },
          },
        ]}
        /*        editable={{
                  isEditable: rowData => rowData.name === "name", // only name(a) rows would be editable

                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {

                      resolve();

                      console.log("newData", newData);
                      console.log("oldData", oldData);
                    }),
                }} */

      />
    );
  };


  return (
    <>
      <Button variant="contained" onClick={getColors}>
        Get all colours
      </Button>
      {colors.length === 0 ? (
        <div />
      ) : (
        <Box>
          {materialTable()}
          {AddModal.isOpened &&
          <AddEditModal open={AddModal.isOpened} handleModal={closeModal} item={AddModal.rowData} />}
          {EditModal.isOpened &&
          <AddEditModal open={EditModal.isOpened} handleModal={closeModal} item={EditModal.rowData} />}
          {DeleteModal.isOpened &&
          <DeleteItemModal open={DeleteModal.isOpened} handleModal={closeModal} id={DeleteModal.id} item="colors" />}
        </Box>
      )}
    </>
  );
};

export default AdminColors;