import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,
        Toolbar,
        Typography,
        Button,
        IconButton,
       } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
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

export default function Menubar() {
  const classes = useStyles();
  const [login, setlogin] = React.useState(false)

  const removingLocal_stroge =()=>{
    localStorage.removeItem('login email')
    setlogin(true)  
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" 
      >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Your Tasks list
          </Typography>
        
         <Button color="inherit" onClick={removingLocal_stroge}>Log out</Button>
        </Toolbar>
      </AppBar>
      {/* <Sidebar /> */}
      {login ? <Redirect to="/" />:null}
    </div>
  );
}
