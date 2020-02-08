import React, { useState } from "react";
import axios from "axios";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MaterialTable from "material-table";
import Typography from "@material-ui/core/Typography";


const AdminCategories = () => {
  const [categories, setCategories] = useState([]);

  const getPartners = () => {
    axios
      .get("/api/catalog")
      .then(orders => {
        setCategories(orders.data);
      })
      .catch(err => {
        console.log("orders", err);
      });
  };

  const columns = [
    {
      title: "Image",
      field: "imageUrl",
      render: rowData => <img alt={rowData.name} src={rowData.imgUrl} style={{ width: "50%" }} />,
    },
    { title: "Name", field: "name" },
    { title: "Description", field: "description" },
    // {
    //   title: "Description",
    //   field: "description",
    //   type: "string",
    //   render: rowData => (
    //     <Typography noWrap style={{ width: "200px", fontSize: "0.875rem"}}>
    //       {rowData.description}
    //     </Typography>
    //   ),
    // },

  ];

  return (
    <>
      <Button variant="contained" onClick={getPartners}>
        Get all categories
      </Button>
      {categories.length === 0 ? (
        <div />
      ) : (
        <Box>
          <MaterialTable
            columns={columns}
            data={categories}
            title="Categories"
            options={{ search: false }}
          />
        </Box>
      )}
    </>
  );
};

export default AdminCategories;
