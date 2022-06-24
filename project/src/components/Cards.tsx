import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { CardItem } from './CardItem';
import cards from '../cards';

class Cards extends React.Component {
  render() {
    const card = cards.map((card) => <CardItem key={card.id} {...card} />);

    return (
      <Container style={{ marginTop: '40px' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {card}
          </Grid>
        </Box>
      </Container>
    );
  }
}

export { Cards };
