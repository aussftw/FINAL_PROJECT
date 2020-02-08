import React, { useEffect, useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import axios from 'axios'
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./useStyles";
import Upload from "../../../../common/Upload/Upload";


const AddPartnerModal = ({ open, handleModal, partner}) => {
  const classes = useStyles();

  const [partnerInfo, setPartnerInfo] = useState(
    {
    name: '',
    url:'',
    customId:'',
    imageUrl:''
  });

  useEffect(() => {
    if (partner !== null) {
      setPartnerInfo({
          name: `${partner.name}`,
          url:`${partner.url}`,
          customId:`${partner.customId}`,
          imageUrl:`${partner.imageUrl}`
      })
    }
  }, [partner]);


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
   if( partner === null) {
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
   handleModal();
 }

 const modal = ()=>{
     return (
       <Modal
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
                 validators={["required"]}
                 errorMessages={["this field is required"]}
               />
               <TextValidator
                 label="Partner url"
                 variant="outlined"
                 value={partnerInfo.url}
                 onChange={handlePartnerInfo("url")}
                 className={classes.input}
                 validators={["required"]}
                 errorMessages={["this field is required"]}
               />

               <Box style={{marginBottom: '15px', width: "360px"}}>
                 <Upload imageUrls={[partnerInfo.imageUrl]} />
               </Box>

               <Button variant="contained" type="submit">
                 Create Partner
               </Button>
             </ValidatorForm>
           </Box>
         </Fade>
       </Modal>
     )
 }

 return  modal()

};

export default AddPartnerModal;