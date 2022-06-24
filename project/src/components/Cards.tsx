import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { CardItem } from './CardItem';
import cards from '../pages/cards';

class Cards extends React.Component {
  render() {
    const card = cards.map((card) => <CardItem key={card.id} {...card} />);

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {card}
        </Grid>
      </Box>
    );
  }
}

export { Cards };
