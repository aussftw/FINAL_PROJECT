import React, { useEffect, useState, useCallback } from "react";
import MaterialTable from "material-table";
import * as axios from "axios";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";

// import useStyles from "./useStyles";
import PreloaderAdaptive from "../../Preloader/Adaptive";

const AdminCustomers = () => {
  const [customers, setCustomers] = useState([]);

  const getAllCustomers = () => {
    axios
      .get("/api/customers")
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err.response);
      });
  };

  // const useHttp = (method, call) => {
  //   const data = {
  //     url: call,
  //     method,
  //   };

  //   return axios(data)
  //     .then(response => {
  //       const body = response.data;
  //       console.log(body);
  //     })
  //     .catch(err => {
  //       // eslint-disable-next-line no-console
  //       console.log(err.response);
  //     });
  // };

  // useHttp("/api/customers", "GET");
  getAllCustomers();

  useEffect(() => {
    console.log("UseEffect");

    // eslint-disable-next-line
  }, [customers]);
  return <button>GET CUSTOMERS</button>;
};

export default AdminCustomers;
