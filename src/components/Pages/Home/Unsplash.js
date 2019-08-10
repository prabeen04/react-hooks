import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ImageErrorBoundary from '../../ErrorBoundary/ImageErrorBoundary';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function Unsplash(props) {
  const { classes, url } = props;
  return (
    <div>
      <ImageErrorBoundary>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              // component={() => <Image url={url} />}
              image={url}
              style={{ height: 400 }}
            />
            <CardContent>
              <h3>
                Lizard
          </h3>
              <h3>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
          </h3>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
        </Button>
            <Button size="small" color="primary">
              Learn More
        </Button>
          </CardActions>
        </Card>
      </ImageErrorBoundary>
    </div>
  )
}

Unsplash.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};

export default withStyles(styles)(Unsplash);