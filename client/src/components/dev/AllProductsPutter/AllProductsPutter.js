import React, { useState, useEffect } from "react";
import * as axios from "axios";

import Button from "@material-ui/core/Button";

const AllProductsPutter = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("/api/products")
      .then(response => {
        setProducts(response.data);
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  const setRandomRate = () => {
    for (let i = 0; i < products.length; i += 1) {
      let voters = Math.round(Math.random() * 10 + 2);
      let resultRating = (Math.floor(Math.random() * 400) + 100) / 100;
      if (resultRating < 3) {
        resultRating = undefined;
        voters = 0;
      }
      axios
        .put(
          // eslint-disable-next-line no-underscore-dangle
          `/api/products/${products[i]._id}`,
          { key: "value" },
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMDIyNjI1OTA2ZGZjMTllMDk1NTA4NyIsImZpcnN0TmFtZSI6IkFsZXhhbmRyIiwibGFzdE5hbWUiOiJTdWdhayIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3NzQ0OTM4OCwiZXhwIjoxNTc3NDg1Mzg4fQ.Vi3BpTqqZ2Sut3hYqQaxZHLwoGTXKTkxJbYV5nUQGpE",
              "Content-Type": "application/json",
            },
            data: {
              rate: {
                rating: resultRating,
                voters,
              },
            },
          }
        )
        .then(response => {
          // eslint-disable-next-line no-console
          console.log(response.data);
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
      // eslint-disable-next-line no-console
      console.log("rating: ", resultRating, "voters: ", voters);
    }
  };

  return (
    <>
      <Button variant="contained" onClick={() => setRandomRate()}>
        Set random Rate
      </Button>
    </>
  );
};

export default AllProductsPutter;
