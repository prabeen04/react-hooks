import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Image from '../Utils/Image';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

export default function Unsplash() {
  return (
    <div>
      <Image/>
    </div>
  )
}
