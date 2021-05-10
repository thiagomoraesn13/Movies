import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    marginTop: 32
  },
  media: {
    height: 140,
  },
});



const CustomCard = ({ movie, handleAddFavorite, handleRemoveFavorite }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={movie.Poster}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" >
            {movie.Title}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p" align='justify'>
            {movie.Plot}
          </Typography>

          <Typography gutterBottom variant="body2" component="p" align='left'>
            {`Exibição: ${movie.Released}`}
          </Typography>


          <Typography gutterBottom variant="body2" component="p" align='left'>
            {`Escritor: ${movie.Writer}`}
          </Typography>

          <Typography gutterBottom variant="body2" component="p" align='left'>
            {`País de Origem: ${movie.Country}`}
          </Typography>

        </CardContent>
      </CardActionArea>

      {
        !movie.addedFavorite &&
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() =>
              !movie.favorite
                ? handleAddFavorite()
                : handleRemoveFavorite(movie)
            }
          >
            {
              !movie.favorite
                ? (
                  <>
                    Marcar como favorito
                       <Favorite />
                  </>
                )
                : (
                  <>
                    Remover
                       <FavoriteBorder />
                  </>
                )
            }
          </Button>
        </CardActions>
      }

      {
        movie.addedFavorite &&
        <div style={{ display: 'flex', marginLeft: '16px', alignItems: 'center', color: 'green' }}>
          <Typography gutterBottom variant="body2" component="p" align='left'>
            {
              movie.addedFavoriteMsg
            }
          </Typography>

          <CheckCircleIcon />
        </div>
      }
    </Card>
  );
}

export default CustomCard