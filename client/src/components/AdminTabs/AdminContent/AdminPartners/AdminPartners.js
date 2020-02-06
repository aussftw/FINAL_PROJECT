import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import MaterialTable from "material-table";
import AddPartnerModal from "./AddPartnerModal/AddPartnerModal";


const AdminPartners = () => {
  // const classes = useStyles();
  const [ordersArr, setOrdersArr] = useState([]);
  const [AddModal, setAddModal] = useState({ isOpened: false, rowData: {name: "", url: "", customId: "", imageUrl: "" } });
  const [dataEditModal, setDataEditModal] = useState({ isOpened: false, rowData: {} });

  const handleOpenAddModal = () => {
    setAddModal({
      isOpened: !dataEditModal.isOpened,
      rowData: AddModal.rowData
    })
  };

  const handleDataEditModal = (rowData) => {
    setDataEditModal({
      isOpened: !dataEditModal.isOpened,
      rowData,
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
      render: rowData => <img alt={rowData.name} src={rowData.imageUrl} style={{ width: 50 }} />,
    },
    { title: "Name", field: "name" },
    { title: "Url", field: "url", render: rowData => <a href={rowData.url}>{rowData.url}</a> },
    { title: "Enabled", field: "enabled" },

  ];

  // const addPartner = () =>{
  //    const newPartner = {
  //      customId: "adidas",
  //      name: "Adidas",
  //      imageUrl: "/img/partners/adidas/001.png",
  //      url: "https://www.adidas.com/us"
  //    };
  //    axios
  //      .post("/api/partners")
  //      .then(orders => {
  //        setOrdersArr(orders.data)
  //      })
  //      .catch(err => {
  //        console.log('orders', err);
  //      });
  //  }
  //
  // const deletePartner = (id) =>{
  //   // AR Y SURE?
  //   axios
  //     .delete(`/api/partners/${id}`)
  //     .then(resp => {
  //       console.log(resp);
  //       // SUCCESSFULLY DELETED data. message
  //     })
  //     .catch(err => {
  //       console.log('orders', err);
  //     });
  // }
  // const updatePartner = (id) =>{
  //   // modal
  //   const updatedPartner = {
  //     imageUrl: "/img/partners/adidas/002.png"
  //   };
  //   // // AR Y SURE?
  //   // axios
  //   //   .put(`/api/partners/${id}`)
  //   //   .then(resp => {
  //   //     console.log(resp);
  //   //     // SUCCESSFULLY DELETED data. message
  //   //   })
  //   //   .catch(err => {
  //   //     console.log('orders', err);
  //   //   });
  // }

  return (
    <>
      <Button variant="contained" onClick={getPartners}>
        Get all partners
      </Button>
      {ordersArr.length === 0 ? (
        <div />
      ) : (
        <Box>
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
                // onClick: {handleOpen}
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

          {AddModal.isOpened && <AddPartnerModal open={AddModal.isOpened} handleCloseEditModal={handleOpenAddModal} partner={AddModal.rowData} />}
          {dataEditModal.isOpened && <AddPartnerModal open={dataEditModal.isOpened} handleCloseEditModal={handleDataEditModal} partner={dataEditModal.rowData} />}

        </Box>
      )}
    </>
  );
};

export default AdminPartners;
