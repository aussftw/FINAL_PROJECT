import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import GridListTile from '@material-ui/core/GridListTile';
import GridList from '@material-ui/core/GridList';
import TilesItem from '../TilesItem/TilesItem';
import useStyles from './useStyles';
import Preloader from '../../Preloader';
import { selectCategory } from '../../../store/actions/Filters';

const TilesPanel = ({ selectCategory }) => {
  const history = useHistory();
  const classes = useStyles();
  const [isLoad, setLoad] = useState(false);
  const [catalog, setCatalog] = useState([]);

  const handleCategory = ( e , text ) => {
    e.preventDefault();
    selectCategory(text);
    history.push("/shop")
  };

  useEffect(() => {
   axios.get('/api/catalog')
     .then(result => {
       setCatalog(result.data);
     }).then(() => {
     setLoad(true);
     }
   )
     .catch(err => console.log(err));
  } ,[]);

  return (
    <>
      {isLoad ? (
        <div className={classes.box}>
          <GridList cellHeight="auto" className={classes.tileBox}>
            <GridListTile cols={2} rows={2} onClick={e => handleCategory(e , catalog[0].name)}>
              <TilesItem text={catalog[0].name} img={catalog[0].imgUrl}  />
            </GridListTile>
            <GridListTile cols={2} rows={1} onClick={e => handleCategory(e , catalog[1].name)}>
              <TilesItem text={catalog[1].name} img={catalog[1].imgUrl} />
            </GridListTile>
          </GridList>
          <GridList className={classes.tileBox} cellHeight="auto">
            <GridListTile cols={1} rows={1} onClick={e => handleCategory(e , catalog[2].name)}>
              <TilesItem text={catalog[2].name} img={catalog[2].imgUrl} />
            </GridListTile>
            <GridListTile cols={1} rows={1} onClick={e => handleCategory(e , catalog[3].name)}>
              <TilesItem text={catalog[3].name} img={catalog[3].imgUrl}  />
            </GridListTile>
            <GridListTile cols={2} rows={2} onClick={e => handleCategory(e , catalog[4].name)}>
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
export default connect(null, { selectCategory })(TilesPanel);
