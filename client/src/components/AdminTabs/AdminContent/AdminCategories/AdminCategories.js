import React, { useState } from "react";
import axios from "axios";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MaterialTable from "material-table";
import Typography from "@material-ui/core/Typography";


const AdminCategories = () => {
  const [categories, setCategories] = useState([]);

  // imgUrl: "/img/catalog/Ficuses.png"
  // description: "Ficus is a genus of about 850 species of woody trees, shrubs, vines, epiphytes and hemiepiphytes in the family Moraceae. Collectively known as fig trees or figs, they are native throughout the tropics with a few species extending into the semi-warm temperate zone."

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
    // {
    //   title: "Logo",
    //   field: "imageUrl",
    //   render: rowData => <img alt={rowData.name} src={rowData.imageUrl} style={{ width: 50 }} />,
    // },
    { title: "Name", field: "name" },
    { title: "Description", field: "description" },
    // {
    //   title: "Description",
    //   field: "description",
    //   searchable: false,
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
