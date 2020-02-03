import React, { useEffect, useState } from "react";

import axios from 'axios'
import { Box, Link, Typography } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./useStyles";
// import SearchResultsPage from "../../components/SearchResultPage";
// import Preloader from "../../components/Preloader";
// const SearchResultsPage = React.lazy(() => import("../../components/SearchResultPage"));

function Orders() {
  const classes = useStyles();
  const [ordersArr, setOrdersArr]= useState([])

  useEffect(()=>{
    axios
      .get("/api/partners")
      .then(orders => {
        setOrdersArr(orders.data)
      })
      .catch(err => {
        console.log('orders', err);
      });
  }, []);

 const deletePartner = (id) =>{
   // AR Y SURE?
   axios
     .delete(`/api/partners/${id}`)
     .then(resp => {
       console.log(resp);
       // SUCCESSFULLY DELETED data. message
     })
     .catch(err => {
       console.log('orders', err);
     });
 }
 const updatePartner = (id) =>{
   // modal
   const updatedPartner = {
     imageUrl: "/img/partners/adidas/002.png"
   };
   // // AR Y SURE?
   // axios
   //   .put(`/api/partners/${id}`)
   //   .then(resp => {
   //     console.log(resp);
   //     // SUCCESSFULLY DELETED data. message
   //   })
   //   .catch(err => {
   //     console.log('orders', err);
   //   });
 }


  return (
    <>
      {ordersArr.length === 0 ? (
        <div />
        
      ):(
        <Box>
          <Box className={classes.partnersItem}>
            <Typography>Partner’s logo</Typography>
            <Typography>Partner’s name</Typography>
            <Typography>Partner’s website</Typography>
            <Typography>Edit/Delete</Typography>
          </Box>
          {ordersArr.map((partner)=>{
        return(
          <Box key={partner._id} className={classes.partnersItem}>
            <Avatar alt={partner.name} src={partner.imageUrl} className={classes.partnersImg} />
            <Typography>{partner.name}</Typography>
            <Typography component={Link} to={partner.url}>{partner.url}</Typography>
            <IconButton
              // edge="start"
              color="inherit"
              aria-label="delete partner"
              onClick={deletePartner(partner.customId)}
            >
              <EditIcon />
            </IconButton> 
            <IconButton 
              color="inherit" 
              aria-label="edit partner"
              onClick={updatePartner(partner.customId)}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        )
      })}
        </Box>
      )}
    
      {/* <p>{ordersArr}</p> */}
      {/* <Suspense fallback={<Preloader />}> */}
      {/*  <SearchResultsPage /> */}
      {/* </Suspense> */}

    </>
  );
}

export default Orders;
