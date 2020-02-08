import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import axios from 'axios'
import { Box } from "@material-ui/core";
// import EditIcon from '@material-ui/icons/Edit';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import IconButton from "@material-ui/core/IconButton";
// import DeleteIcon from '@material-ui/icons/Delete';
import MaterialTable from 'material-table'
// import AddPartnerModal from "../AdminContent/AddPartnerModal/AddPartnerModal";
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from "@material-ui/icons/Add";

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
  const [ordersArr, setOrdersArr]= useState([])
  // const [openAddModal, setopenAddModal]= useState(false);
  // const [openEditModal, setEditModal]= useState(false);
  // const [dataEditModal, setDataEditModal]= useState({});
  //
  // const handleOpenEditModal = ()=>{
  //   setEditModal(!openEditModal);
  // }
  // const handleOpenAddModal = ()=>{
  //   setopenAddModal(!openAddModal);
  // }
  //
  // const handleDataEditModal = (rowData)=>{
  //   setDataEditModal(rowData)
  // }


  const getOrders =()=>{
    axios
  .get("/api/orders")
  .then(orders => {
    setOrdersArr(orders.data)
    console.log('all',orders.data);
  })
  .catch(err => {
    console.log('orders', err);
  });
    // axios
    //   .get("/api/orders/user")
    //   .then(orders => {
    //     console.log('user',orders.data);
    //   })
    //   .catch(err => {
    //     console.log('orders', err);
    //   });

  }

  const columns = [
    { title: 'Order №', field: 'orderNo'},
    { title: 'Canceled', field: 'canceled', type: "boolean", },
    { title: 'Status', field: 'status'},
    { title: 'Name', field: 'name'},
    { title: 'Mobile', field: 'mobile'},
    { title: 'Email', field: 'email'},
    { title: 'Delivery Address', field: 'deliveryAddress'},
    // { title: 'Products', field: 'products' },
    { title: 'Total Sum', field: 'totalSum'},

];


  return (
    <>
      <Button variant="contained" onClick={getOrders}>
        Get orders
      </Button>
      {ordersArr.length === 0 ? (
        <div />
      ):(
        <Box>

          <MaterialTable
            columns={columns}
            data={ordersArr}
            title="All orders"
            actions={[
              {
                icon: ()=><EditIcon />,
                tooltip: "Edit product",
                // onClick: (event, rowData) => {
                //   openModalHandler(rowData);
                // },
              },
            ]}
            // options={{ search: false }}
            // actions={[
            //   {
            //     icon: () => <AddCircleIcon />,
            //     tooltip: 'Add Partner',
            //     isFreeAction: true,
            //     onClick: ()=>{handleOpenAddModal()}
            //   },
            //   {
            //     icon: () => <DeleteIcon />,
            //     tooltip: 'Delete Partner',
            //     // onClick: {handleOpen}
            //   },
            //   {
            //     icon: () => <EditIcon />,
            //     tooltip: 'Edit Partner',
            //     onClick: (event, rowData) => {
            //       console.log(event);
            //       handleDataEditModal(rowData);
            //       handleOpenEditModal()
            //     }
            //   }
            // ]}

          />

          {/* <AddPartnerModal open={openAddModal} handleOpen={handleOpenAddModal} partner={{name:"", url:"", customId:"", imageUrl:""}} /> */}
          {/* <AddPartnerModal open={openEditModal} handleOpen={handleOpenEditModal} partner={dataEditModal} /> */}


        </Box>
      )}
    </>
  );
}

export default AdminOrders;
