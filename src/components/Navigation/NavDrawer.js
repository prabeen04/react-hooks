import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AssignmentIcon from '@material-ui/icons/Assignment';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class NavDrawer extends React.Component {

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <Link to='/'>
                        <ListItem button>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary='Home' />
                        </ListItem>
                    </Link>
                    <Link to='/news'>
                        <ListItem button>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary='News' />
                        </ListItem>
                    </Link>
                    <Link to='/todo'>
                        <ListItem button>
                            <ListItemIcon><AssignmentIcon /></ListItemIcon>
                            <ListItemText primary='Todo' />
                        </ListItem>
                    </Link>
                    <Link to='/context'>
                        <ListItem button>
                            <ListItemIcon><AssignmentIcon /></ListItemIcon>
                            <ListItemText primary='Context' />
                        </ListItem>
                    </Link>
                    <Link to='/reducer'>
                        <ListItem button>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary='Reducer' />
                        </ListItem>
                    </Link>
                    <Link to='/map'>
                        <ListItem button>
                            <ListItemIcon><AssignmentIcon /></ListItemIcon>
                            <ListItemText primary='Map' />
                        </ListItem>
                    </Link>
                    <Link to='/spring'>
                        <ListItem button>
                            <ListItemIcon><AssignmentIcon /></ListItemIcon>
                            <ListItemText primary='Spring' />
                        </ListItem>
                    </Link>
                    <Link to='/newsSpring'>
                        <ListItem button>
                            <ListItemIcon><AssignmentIcon /></ListItemIcon>
                            <ListItemText primary='Spring' />
                        </ListItem>
                    </Link>
                </List>
            </div>
        );
        return (
            <div>
                <Drawer open={this.props.isOpen} onClose={this.props.handleDrawerOpen}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.props.handleDrawerOpen}
                        onKeyDown={this.props.handleDrawerOpen}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

NavDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawer);
