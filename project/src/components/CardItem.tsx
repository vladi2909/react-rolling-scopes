import React from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Card {
  id: number;
  title: string;
  imgLink: string;
  content: string;
}

class CardItem extends React.Component<Card, { value: string }> {
  render() {
    return (
      <>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={this.props.imgLink} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {this.props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {this.props.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </>
    );
  }
}

export { CardItem };
