import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });
  
export default function CounterHook() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h3>{count}</h3>
            <button
                onClick={() => setCount(count + 4)}>
                Increase
            </button>
        </div>
    )
}
