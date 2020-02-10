import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Box } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import MaterialTable from 'material-table'
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AddPartnerModal from "./AdminPartners/AddPartnerModal/AddPartnerModal";
import AdminPartners from "./AdminPartners/AdminPartners";
import useStyles from "./useStyles";
import AdminCategories from "./AdminCategories/AdminCategories";
import AdminColors from "./AdminColors/AdminColors";
import AdminSizes from "./AdminSizes/AdminSizes";
// import AdminProducts from "./AdminProducts/AdminProducts";
// import AdminOrders from "./AdminOrders/AdminOrders";
// import AdminContent from "./AdminContent/AdminContent";


const AdminContent = () => {
  const classes = useStyles();
//   const [ordersArr, setOrdersArr]= useState([])
//   const [openAddModal, setopenAddModal]= useState(false);
//   const [openEditModal, setEditModal]= useState(false);
//   const [dataEditModal, setDataEditModal]= useState({});
//
//   const handleOpenEditModal = ()=>{
//     setEditModal(!openEditModal);
//   }
//   const handleOpenAddModal = ()=>{
//     setopenAddModal(!openAddModal);
//   }
//
//   const handleDataEditModal = (rowData)=>{
//     setDataEditModal(rowData)
//   }
//
//
//   const getPartners= ()=>{
//     axios
//       .get("/api/partners")
//       .then(orders => {
//         setOrdersArr(orders.data)
//       })
//       .catch(err => {
//         console.log('orders', err);
//       });
//   }
//
//   const columns = [
//     { title: 'Logo', field: 'imageUrl',  render: rowData => <img alt={rowData.name} src={rowData.imageUrl} style={{width: 50}} /> },
//     { title: 'Name', field: 'name'},
//     { title: 'Url', field: 'url', render: rowData => <a href={rowData.url}>{rowData.url}</a>  }
//
// ];
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

  return (
    <>
      {/* <Button variant="contained" onClick={getPartners}> */}
      {/*  Get all partners */}
      {/* </Button> */}
      <Container className={classes.container} maxWidth="lg">
        <Typography variant="h3" style={{ cursor: "default" }}>
         Content
        </Typography>
        <Box className={classes.tabsComponent}>
          <Tabs
            className={classes.tabsList}
            value={value}
            onChange={handleChange}
            aria-label="admin"
            indicatorColor="primary"
          >
            <Tab
              label={<span className={classes.tabText}>Categories</span>}
              {...a11yProps(0)}
            />
            <Tab
              label={<span className={classes.tabText}>Partners</span>}
              {...a11yProps(1)}
            />
            <Tab
              label={<span className={classes.tabText}>Colors</span>}
              {...a11yProps(2)}
            />
            <Tab
              label={<span className={classes.tabText}>Sizes</span>}
              {...a11yProps(3)}
            />
          </Tabs>
          <Box
            className={classes.contentBox}
            component="div"
            role="tabpanel"
            hidden={value !== 0}
            aria-labelledby={`simple-tab-${0}`}
          >
            {value === 0 && <AdminCategories />}
          </Box>
          <Box
            className={classes.contentBox}
            component="div"
            role="tabpanel"
            hidden={value !== 1}
            aria-labelledby={`simple-tab-${1}`}
          >
            {value === 1 && <AdminPartners />}
          </Box>
          <Box
            className={classes.contentBox}
            component="div"
            role="tabpanel"
            hidden={value !== 2}
            aria-labelledby={`simple-tab-${2}`}
          >
            {value === 2 && <AdminColors />}
          </Box>
          <Box
            className={classes.contentBox}
            component="div"
            role="tabpanel"
            hidden={value !== 3}
            aria-labelledby={`simple-tab-${3}`}
          >
            {value === 3 && <AdminSizes />}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default AdminContent;

