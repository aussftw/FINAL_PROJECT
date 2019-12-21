import React from 'react';

import { TilesPanel } from '../Tiles/TilesPanel/TilesPanel';
import Container from '@material-ui/core/Container';

export const HomePage = () => {
  return (
    <Container maxWidth={'lg'} disableGutters={true}>
      <TilesPanel />
    </Container>
  )
};
