import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@material-ui/core";
import MaterialTable from "material-table";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
// import EditIcon from "@material-ui/icons/Edit";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";
import AddEditModal from "./AddEditModal/AddEditModal";
import SnackbarMessage from "../../Snackbar/SnackbarMessage";
import PreloaderAdaptive from "../../../Preloader/Adaptive";



const AdminContacts = ({
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

  const [contacts, setContacts] = useState([]);


  const getContacts = () => {
    axios
      .get("/api/contacts")
      .then(orders => {
        console.log('orders.data',orders.data);
        setContacts(orders.data);
      })
      .catch(err => {
        console.log("orders", err);
      });
  };

  useEffect(() => {
    getContacts();
  },[]);

  const handleOpenAddModal = () => {
    setAddModal({
      isOpened: !AddModal.isOpened,
      rowData: AddModal.rowData,
    });
  };

  // const handleEditModal = (rowData) => {
  //   setEditModal({
  //     isOpened: !EditModal.isOpened,
  //     rowData,
  //   });
  // };
  const handleDeleteModal = (rowData) => {
    setDeleteModal({
      isOpened: !DeleteModal.isOpened,
      id: rowData._id,
    });
  };


  const closeModal = () => {
    // setEditModal({
    //   isOpened: false,
    //   rowData: EditModal.rowData,
    // });
    setAddModal({
      isOpened: false,
      rowData: AddModal.rowData,
    });
    setDeleteModal({
      isOpened: false,
      id: DeleteModal.id,
    });
  };

  // const getLines = (rowData)=>{
  //   {rowData.content.map((item)=><div>{item.text}<div/>) }
  // }

  const columns = [
    { title: "Option", field: "option" },
    // { title: "Text", field: "content[0].text", type: "string"},
    // { title: "Link", field: "content[0].link", type: "string" },
    // { title: "Text", field: "content", type: "string",
    //   render: rowData => <div> {getLines(rowData)}</div>
    // }
  ];

  const materialTable = () => {
    return (
      <MaterialTable
        columns={columns}
        data={contacts}
        title="Contacts"
        options={{ search: false }}
        actions={[
          {
            icon: () => <AddCircleIcon />,
            tooltip: "Add contact",
            isFreeAction: true,
            onClick: () => {
              handleOpenAddModal();
            },
          },
          {
            icon: () => <DeleteIcon />,
            tooltip: "Delete contact",
            onClick: (event, rowData) => {
              handleDeleteModal(rowData);
            },
          },
          // {
          //   icon: () => <EditIcon />,
          //   tooltip: "Edit contact",
          //   onClick: (event, rowData) => {
          //     handleEditModal(rowData);
          //   },
          // },
          {
            icon: "refresh",
            tooltip: "Refresh Data",
            isFreeAction: true,
            onClick: () => getContacts(),
          },
        ]}
      />
    );
  };

  return (
    <>
      {contacts.length === 0 ? (
        <PreloaderAdaptive />
      ) : (
        <Box>
          {materialTable()}
          {AddModal.isOpened && (
            <AddEditModal
              open={AddModal.isOpened}
              handleModal={closeModal}
              item={AddModal.rowData}
              handleOpenSnackbar={handleOpenSnackbar}
              autoRefresh={getContacts}
            />
          )}

          {/* {EditModal.isOpened && ( */}
          {/*  <AddEditModal */}
          {/*    open={EditModal.isOpened} */}
          {/*    handleModal={closeModal} */}
          {/*    item={EditModal.rowData} */}
          {/*    handleOpenSnackbar={handleOpenSnackbar} */}
          {/*    autoRefresh={getContacts} */}
          {/*  /> */}
          {/* )} */}
          {DeleteModal.isOpened && (
            <DeleteItemModal
              open={DeleteModal.isOpened}
              handleModal={closeModal}
              id={DeleteModal.id}
              item="contacts"
              handleOpenSnackbar={handleOpenSnackbar}
              autoRefresh={getContacts}
            />
          )}
          <SnackbarMessage openSnackbar={openSnackbar} handleCloseSnackbar={handleCloseSnackbar} type={snackbarType} />
        </Box>
      )}
    </>
  );
};

export default AdminContacts;