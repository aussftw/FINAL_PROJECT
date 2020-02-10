import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Box } from "@material-ui/core";
// import EditIcon from '@material-ui/icons/Edit';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import IconButton from "@material-ui/core/IconButton";
// import DeleteIcon from '@material-ui/icons/Delete';
import MaterialTable from "material-table";
// import AddPartnerModal from "../AdminContent/AddPartnerModal/AddPartnerModal";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import AddPartnerModal from "../AdminContent/AdminPartners/AddPartnerModal/AddPartnerModal";
import DeleteItemModal from "../AdminContent/DeleteItemModal/DeleteItemModal";
import CancelOrder from "./CancelOrderModal/CancelOrder";
import SnackbarMessage from "../AdminContent/Snackbar/SnackbarMessage";
import AdminOrdersProducts from "./AdminOrdersProducts/AdminOrdersProducts";


// in progress, processed, shipped, recevied


// products: (4) [{…}, {…}, {…}, {…}]
// canceled: false
// _id: "5e381a663e96e417ac8974e0"
// name: "Gogi"
// customerId: {isAdmin: false, enabled: true, _id: "5e21d28298d2fa29401445d1", firstName: "Gogi", lastName: "Doe", …}
// status: "In progress"
// email: "alink0@ukr.net"
// mobile: "+380956920777"
// deliveryAddress: "Petra Str 123,17"
// letterSubject: "Congratulations! You’re now a part of the Plantly Shop family."
// letterHtml: "<h1>Thank you for your order! Our product is so much more than the packaging.</h1>"
// orderNo: "2916855"
// totalSum: 86.41

function AdminOrders() {
  // const classes = useStyles();
  const [ordersArr, setOrdersArr] = useState([]);
  const [AddModal, setAddModal] = useState({ isOpened: false, rowData: null });
  const [CancelModal, setCancelModal] = useState({ isOpened: false, id: "", orderNo: "" });

  const handleOpenAddModal = () => {
    setAddModal({
      isOpened: !AddModal.isOpened,
      rowData: AddModal.rowData,
    });
  };

  const handleCancelModal = (rowData) => {
    setCancelModal({
      isOpened: !AddModal.isOpened,
      id: rowData._id,
      orderNo: rowData.orderNo,
    });
  };

  const closeModal = () => {
    setAddModal({
      isOpened: false,
      rowData: AddModal.rowData,
    });
    setCancelModal({
      isOpened: false,
      id: CancelModal.id,
      orderNo: CancelModal.orderNo,
    });

  };

  // const modalInputs = () => {
  //   const valuesArr = Object.keys(colors[0]);
  //   const inputs = valuesArr.filter(word => word !== "_id" && word !== "date" && word !=="tableData" && word !== "__v");
  // }


  // snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState({ type: "", message: "" });

  const handleOpenSnackbar = (type) => {
    console.log("setOpenSnackbar");
    setOpenSnackbar(true);
    setSnackbarType(type);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  // snackbar


  const getOrders = () => {
    axios
      .get("/api/orders/all")
      .then(orders => {
        setOrdersArr(orders.data);
        console.log("all", orders.data);
      })
      .catch(err => {
        console.log("orders", err);
      });
    // axios
    //   .get("/api/orders")
    //   .then(orders => {
    //     console.log('user',orders.data);
    //   })
    //   .catch(err => {
    //     console.log('orders', err);
    //   });

  };

  const columns = [
    { title: "Order №", field: "orderNo" },
    { title: "Canceled", field: "canceled", type: "boolean" },
    { title: "Status", field: "status" },
    { title: "Name", field: "name" },
    { title: "Mobile", field: "mobile" },
    { title: "Email", field: "email" },
    { title: "Delivery Address", field: "deliveryAddress" },
    { title: "Total Sum", field: "totalSum" },
    // { title: 'Products', field: 'products', searchable: false,
    // render: rowData => <AdminOrdersProducts rowData={rowData.products} /> },

  ];


  return (
    <>
      <Button variant="contained" onClick={getOrders}>
        Get orders
      </Button>
      {ordersArr.length === 0 ? (
        <div />
      ) : (
        <Box>
          <MaterialTable
            columns={columns}
            data={ordersArr}
            title="All orders"
            detailPanel={[
              {
                tooltip: 'Show Products',
                render: rowData => {
                  return (
                    <AdminOrdersProducts rowData={rowData.products} />
                  )
                },
              },
            ]}
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
                icon: () => <EditIcon />,
                tooltip: "Edit size",
                onClick: (event, rowData) => {
                  handleCancelModal(rowData);
                }
              },
            ]}
          />
          {AddModal.isOpened &&
          <AddPartnerModal open={AddModal.isOpened} handleModal={closeModal} partner={AddModal.rowData} />}
          {/* <AddPartnerModal open={openAddModal} handleOpen={handleOpenAddModal} partner={{name:"", url:"", customId:"", imageUrl:""}} /> */}
          {/* <AddPartnerModal open={openEditModal} handleOpen={handleOpenEditModal} partner={dataEditModal} /> */}
          {CancelModal.isOpened && (
          <CancelOrder
            open={CancelModal.isOpened}
            handleModal={closeModal}
            id={CancelModal.id}
            orderNo={CancelModal.orderNo}
            handleOpenSnackbar={handleOpenSnackbar}
          />
        )}
          <SnackbarMessage
            openSnackbar={openSnackbar}
            handleCloseSnackbar={handleCloseSnackbar}
            type={snackbarType}
          />

        </Box>
        )}
    </>
  );
}

export default AdminOrders;

/* editable={{
         isEditable: rowData => rowData.name === "status", // only name(a) rows would be editable

         onRowUpdate: (newData, oldData) =>
           new Promise((resolve, reject) => {
             setTimeout(() => {
               {
                 // /!* const data = this.state.data;
                 // const index = data.indexOf(oldData);
                 // data[index] = newData;
                 // this.setState({ data }, () => resolve()); *!/
               }
               resolve();
             }, 1000);
             console.log("newData", newData);
             console.log("oldData", oldData);
           }),

       }} */