import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function MovieCard ( { id, title, image, rating, releaseDate, overview } ) {

    return (
        <Card >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

export default MovieCard