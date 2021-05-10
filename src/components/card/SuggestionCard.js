import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    marginTop: 32
  },
  media: {
    height: 140,
  },
});

const SuggestionCard = ({ movies }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={8}
    >
      {
        movies.map(movie =>
          <Grid
            item xs={12} sm={6} md={4}
          >
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2" >
                    {movie.title}
                  </Typography>

                  <Typography variant="body2" color="textSecondary" component="p" align='justify'>
                    {movie.overview}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

        )
      }
    </Grid>
  );
}

export default SuggestionCard