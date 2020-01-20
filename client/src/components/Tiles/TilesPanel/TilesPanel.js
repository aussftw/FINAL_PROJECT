import React, { useEffect, useState } from "react";
import axios from "axios";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import TilesItem from "../TilesItem/TilesItem";
import useStyles from "./useStyles";
import Preloader from "../../Preloader/Desktop";

const TilesPanel = () => {
  const classes = useStyles();
  const [isLoad, setLoad] = useState(false);
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/catalog");
      // .then (response => {
      //   console.log("CATALOG" , response.data);
      //   // setLoad(true);
      //   setCatalog(response.data);
      //   console.log(catalog);
      // }).catch(err => {
      // console.log(err.data);
      // });
      setCatalog(result.data);
      setLoad(true);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoad ? (
        <div className={classes.box}>
          <GridList cellHeight={245} className={classes.tileBox}>
            <GridListTile cols={2} rows={2}>
              <TilesItem text={catalog[0].name} img={catalog[0].imgUrl} />
            </GridListTile>
            <GridListTile cols={2} rows={1}>
              <TilesItem text={catalog[1].name} img={catalog[1].imgUrl} />
            </GridListTile>
          </GridList>
          <GridList className={classes.tileBox} cellHeight={245}>
            <GridListTile cols={1} rows={1}>
              <TilesItem text={catalog[2].name} img={catalog[2].imgUrl} />
            </GridListTile>
            <GridListTile cols={1} rows={1}>
              <TilesItem text={catalog[3].name} img={catalog[3].imgUrl} />
            </GridListTile>
            <GridListTile cols={2} rows={2}>
              <TilesItem text={catalog[4].name} img={catalog[4].imgUrl} />
            </GridListTile>
          </GridList>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};
export default TilesPanel;
