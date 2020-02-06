import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
// import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
// import { Visibility, VisibilityOff } from "@material-ui/icons";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
// import axios from 'axios'
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// import FormControl from "@material-ui/core/FormControl";
// import TextField from "@material-ui/core/TextField";
// import MenuItem from "@material-ui/core/MenuItem";
// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./useStyles";
import Upload from "../../../../common/Upload/Upload";
import FormControl from "@material-ui/core/FormControl";


         //   <Fade in={open}>
         //     <div className={classes.paper}>
         //       <div className={classes.wrapper}>
         //         <h3 className={classes.title}>Add new partner</h3>
         //         <ValidatorForm
         //           noValidate={false}
         //           onSubmit={()=>{addPartner()}}
         //         >
         //           <TextValidator
         //             label="Partner name"
         //             variant="outlined"
         //             value={partnerInfo.name}
         //             onChange={handlePartnerInfo("name")}
         //             className={classes.textField}
         //             validators={["required", "matchRegexp:^[`'\"()A-Za-zd.s_-]{1,50}"]}
         //             errorMessages={[
         //               "this field is required",
         //               "The name must be more than 4 characters, including latin letters",
         //             ]}
         //           />
         //           <TextValidator
         //             label="Partner url"
         //             variant="outlined"
         //             value={partnerInfo.url}
         //             onChange={handlePartnerInfo("url")}
         //             className={classes.textField}
         //             validators={["required"]}
         //             errorMessages={[
         //               "this field is required",
         //             ]}
         //           />
         //
         //           <Button className={classes.btn} type="submit">
         //             Create Partner
         //           </Button>
         //         </ValidatorForm>
         //
         //       </div>
         //     </div>
         //   </Fade>
         // </Modal>

// {/* <ValidatorForm */}
// {/*  noValidate={false} */}
// {/*  onSubmit={()=>{addPartner()}} */}
// {/* > */}
// {/*  <TextValidator */}
// {/*    label="Partner name" */}
// {/*    variant="outlined" */}
// {/*    value={partnerInfo.name} */}
// {/*    onChange={handlePartnerInfo("name")} */}
// {/*    className={classes.textField} */}
// {/*    validators={["required", "matchRegexp:^[`'\"()A-Za-zd.s_-]{1,50}"]} */}
// {/*    errorMessages={[ */}
// {/*        "this field is required", */}
// {/*        "The name must be more than 4 characters, including latin letters", */}
// {/*      ]} */}
// {/*  /> */}
// {/*  <TextValidator */}
// {/*    label="Partner url" */}
// {/*    variant="outlined" */}
// {/*    value={partnerInfo.url} */}
// {/*    onChange={handlePartnerInfo("url")} */}
// {/*    className={classes.textField} */}
// {/*    validators={["required"]} */}
// {/*    errorMessages={[ */}
// {/*        "this field is required", */}
// {/*      ]} */}
// {/*  /> */}
//
// {/*  <Button className={classes.btn} type="submit"> */}
// {/*      Create Partner */}
// {/*  </Button> */}
// {/* </ValidatorForm> */}

const AddPartnerModal = ({ open, handleModal, partner}) => {
  const classes = useStyles();

  const [partnerInfo, setPartnerInfo] = useState({
        // _id: `${partner._id}`,
        name: `${partner.name}`,
        url:`${partner.url}`,
        customId:`${partner.customId}`,
        imageUrl:`${partner.imageUrl}`
      });

  const handlePartnerInfo = prop => event => {
    setPartnerInfo({ ...partnerInfo, [prop]: event.target.value });
  };

  // const addImg =()=>{
  //
  //
  //   }
  //   // axios
  //   //   .post("/products/images", formData, {
  //   //     headers: {
  //   //       path: `./static/images/products/`,
  //   //       "content-type": "multipart/form-data"
  //   //     }
  //   //   })
  //   //   .then(response => {
  //   //     /*Do something with response*/
  //   //   })
  //   //   .catch(err => {
  //   //     /*Do something with error, e.g. show error to user*/
  //   //   });
  // }

   function addPartner  (){

   if( partner.customId === '')
   {
   const newPartner = { ...partnerInfo, customId:  partnerInfo.name.split(' ').join('') }
     console.log('POST ', newPartner)
     // axios
     //   .post("/api/partners", partnerInfo )
     //   .then(newPartner => {
     //     console.log('newPartner', newPartner);
     //   })
     //   .catch(err => {
     //     console.log('newPartner', err);
     //   });
   } else {
      console.log('put ', partner.customId, partnerInfo);
     // // AR Y SURE?
     // axios
     //   .put(`/api/partners/${partner.customId}`)
     //   .then(resp => {
     //     console.log(resp);
     //     // SUCCESSFULLY   data. message
     //   })
     //   .catch(err => {
     //     console.log('orders', err);
     //   });
   }
 }

 return (
   
   <Modal
     // aria-labelledby="transition-modal-title"
     // aria-describedby="transition-modal-description"
     // className={classes.modal}
     open={open}
     onClose={handleModal}
     closeAfterTransition
     BackdropComponent={Backdrop}
     BackdropProps={{
       timeout: 500,
     }}
   >
     <Fade in={open}>
       <Box className={classes.modalBox}>
         {/* <div className={classes.wrapper}> */}
         <Typography
           component="h3"
           align="center"
           style={{ padding: "4px" }}
         >
           Add new partner
         </Typography>

         <IconButton
           component="span"
           onClick={handleModal}
           className={classes.closeBtn}
         >
           <CloseIcon />
         </IconButton>

         <ValidatorForm
           noValidate={false}
           onSubmit={()=>{addPartner()}}
         >
           <TextValidator
             label="Partner name"
             variant="outlined"
             value={partnerInfo.name}
             onChange={handlePartnerInfo("name")}
             className={classes.input}
             // className={classes.textField}
             validators={["required", "matchRegexp:^[`'\"()A-Za-zd.s_-]{1,50}"]}
             errorMessages={[
                   "this field is required",
                   "The name must be more than 4 characters, including latin letters",
                 ]}
           />
           <TextValidator
             label="Partner url"
             variant="outlined"
             value={partnerInfo.url}
             onChange={handlePartnerInfo("url")}
             // className={classes.textField}
             className={classes.input}
             validators={["required"]}
             errorMessages={[
                   "this field is required",
                 ]}
           />

           <Box style={{marginBottom: '15px', width: "360px"}}>
             <Upload imageUrls={[partnerInfo.imageUrl]} />
           </Box>

           <Button variant="contained" type="submit">
                 Create Partner
           </Button>
         </ValidatorForm>

         {/* </div> */}
       </Box>
     </Fade>
   </Modal>
  /* <Modal
     open={open}
     onClose={handleCloseEditModal}
     closeAfterTransition
     BackdropComponent={Backdrop}
     BackdropProps={{
       timeout: 500,
     }}
   >
     <Fade in={open}>
       <Box className={classes.modal}>
         <Typography
           component="h3"
           align="center"
           style={{ padding: "4px" }}
         >
             Product modal 1
         </Typography>
         {/!*   //{data ? (
         //) : (
         //  <Typography component="h3" align="center" style={{ padding: "4px" }}>
         //    Product modal 2
         //  </Typography>
        // )} *!/}
         <IconButton
           component="span"
           onClick={handleCloseEditModal}
           className={classes.closeBtn}
         >
           <CloseIcon />
         </IconButton>

         <FormControl component="div" fullWidth>
           <TextField
             className={classes.input}
             id="name"
             label="Product name"
             size="small"
             value={partnerInfo.name}
             onChange={handlePartnerInfo("name")}
           />
           <FormControlLabel
             value="Enabled"
             control={(
               <Switch
                 id="enabled"
                 color="primary"
                 checked={partnerInfo.enabled}
                 // onChange={handleSwitchChange}
                 value="enabled"
               />
             )}
             label="Product Availability"
             labelPlacement="start"
           />
           <TextField
             className={classes.inputSmall}
             id="price"
             label="Price"
             size="small"
             type="number"
             // value={productValue.currentPrice}
             InputProps={{
               startAdornment: <InputAdornment position="start">$</InputAdornment>,
             }}
             // onChange={handleChange("currentPrice")}
             value={partnerInfo.url}
             onChange={handlePartnerInfo("url")}
           />
           <Button variant="contained" type="submit" onClick={()=>{addPartner()}}>
             Submit
           </Button>
         </FormControl> */

 );
};

export default AddPartnerModal;