import React from 'react'
import Todostore from './Todostore';
import {Grid, makeStyles} from '@material-ui/core';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import Menubar from '../Menubar';
import { SnackbarProvider } from 'notistack';

const useStyles = makeStyles ((theme)=>({
Todolist:{
    margin:theme.spacing(1),
    minHeight:461,
    // minWidth:461,

}
}))

const Todo =()=> {
    const classes = useStyles();

    return (
        <div >
            <Menubar />
        <div className={classes.Todolist}>
            <Grid container spacing={3}>     
                <Grid item xs={12} sm={6}>
                <TodoList />
                </Grid>
                <Grid item xs={12} sm={6}>
                <SnackbarProvider maxSnack={3}>
                <Todostore />
                </SnackbarProvider>
                </Grid>
            </Grid>
        </div>
        </div>
    )

}

//Redux ...
const mapStateProps =(state)=>{
    return{
    displayData:state.usertasks_for_display
    }
}
export default connect(mapStateProps,null)(Todo);