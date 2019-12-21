import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TemporaryDrawer from './TemporaryDrawer';
import { log } from 'util';
import {withRouter} from 'react-router-dom'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function AppBarComponent(props) {

  const test=(params) => {
    fetch()
  }
  
  const handleRouting= (param) => {
    props.history.push(`/${param}`)
  }
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();
  const toggleDrawer = (open) =>
    event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    console.log(open)
    setDrawerOpen(open);
  };

  return (
    <div className={classes.root}>
      <TemporaryDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} handleRouting={handleRouting}/>
      <AppBar position="static">
        <Toolbar>
          <IconButton  edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(AppBarComponent);
