import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import * as axios from "axios";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";

import useStyles from "./useStyles";
import PreloaderAdaptive from "../../Preloader/Adaptive";

const AdminProducts = () => {
    const classes = useStyles();
    const [getStarted, setGetStarted] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [allLoaded, setAllLoaded] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const modalHandler = () => {
        setModalOpen(!modalOpen);
    };

    const columns = [
        { title: 'Product Name', field: 'name', type: 'string', headerStyle: {minWidth: '150px'},  },
        { title: 'Enabled', field: 'enabled', type: 'boolean', headerStyle: {padding: '16px 0 16px'}, cellStyle: {padding: '16px 0 16px', textAlign: "center"}},
        { title: 'Price', field: 'currentPrice', type: 'numeric', cellStyle: {padding: '16px 0 16px'}, headerStyle: {padding: '16px 0 16px'} },
        { title: 'Qty', field: 'quantity', type: 'numeric', cellStyle: {padding: '16px 16px 16px 0'}, headerStyle: {padding: '16px 16px 16px 0'} },
        { title: 'Category', field: 'categories', type: 'string' },
        { title: 'Color', field: 'color', type: 'string', cellStyle: {padding: '16px 16px 16px 0'}, headerStyle: {padding: '16px 16px 16px 0'} },
        { title: 'Size', field: 'sizes', type: 'string', cellStyle: {padding: '16px 16px 16px 0'}, headerStyle: {padding: '16px 16px 16px 0'} },
        { title: 'Date', field: 'date', type: 'date' },
        { title: 'Product url', field: 'productUrl', type: 'string' },
        { title: 'Description', field: 'description', type: 'string', render: rowData => (
          <Typography noWrap style={{width: "200px"}}>
            {rowData.description}
          </Typography>
            ),},
        // { title: 'Image urls', field: 'imageUrls', type: 'string' },
    ];

    const getProducts = () => {
        axios
            .get("/api/products")
            .then(response => {
                setAllProducts(response.data);
            })
            .catch(err => {
                // eslint-disable-next-line no-console
                console.log(err.response);
            });
    };

    const getCategories = () => {
        axios
            .get("/api/catalog")
            .then(response => {
                setCategories(response.data);
            })
            .catch(err => {
                // eslint-disable-next-line no-console
                console.log(err.response);
            });
    };

    const getColors = () => {
        axios
            .get("/api/colors")
            .then(response => {
                setColors(response.data);
            })
            .catch(err => {
                // eslint-disable-next-line no-console
                console.log(err.response);
            });
    };

    const getSizes = () => {
        axios
            .get("/api/sizes")
            .then(response => {
                setSizes(response.data);
            })
            .catch(err => {
                // eslint-disable-next-line no-console
                console.log(err.response);
            });
    };

    useEffect(() => {
        if (
            allLoaded === false &&
            allProducts.length !== 0 &&
            categories.length !== 0 &&
            colors.length !== 0 &&
            sizes.length !== 0
        ) {
            setAllLoaded(true);
            console.log("allProducts: ", allProducts);
            console.log("categories: ", categories);
            console.log("colors: ", colors);
            console.log("sizes: ", sizes);
        }
    }, [allLoaded, allProducts, categories, colors, sizes]);

    const getAllHandler = () => {
        setAllLoaded(false);
        setGetStarted(true);
        getProducts();
        getCategories();
        getColors();
        getSizes();
    };

    return (
      <Box>
        <Button variant="contained" onClick={getAllHandler}>
                Get all products and parameters
        </Button>
        {getStarted && (
        <>
          {!allLoaded ? (
            <PreloaderAdaptive />
                    ) : (
                      <MaterialTable
                        columns={columns}
                        data={allProducts}
                        actions={[
                                {
                                    icon: 'edit',
                                    tooltip: 'Edit',
                                    onClick: (event, rowData) => {
                                        // Do save operation
                                    }
                                },
                                {
                                    icon: 'delete',
                                    tooltip: 'Delete product',
                                    onClick: (event, rowData) => {
                                        modalHandler()
                                    }
                                }
                            ]}
                        title="Products"
                      />
                    )}
          <Modal
            className={classes.modal}
            open={modalOpen}
            onClose={modalHandler}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                            timeout: 500,
                        }}
          >
            <Fade in={modalOpen}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">Transition modal</h2>
                <p id="transition-modal-description">react-transition-group animates me.</p>
              </div>
            </Fade>
          </Modal>
        </>
            )}
      </Box>
    );
};

export default AdminProducts;
