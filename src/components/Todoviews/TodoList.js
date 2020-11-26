import React from 'react'
import {Container, Grid, Paper, Typography} from '@material-ui/core';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import ListAltIcon from '@material-ui/icons/ListAlt';

import WorkIcon from '@material-ui/icons/Work';
import PersonIcon from '@material-ui/icons/Person';
import { Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme)=>({
    Gridspacing:{
        margin: theme.spacing(2),
        alignContent:"flex-end",
        borderRadius:20,
    },
    PaperStyle:{
        // width: theme.spacing(20),
        // height: theme.spacing(8),
    }
}));

function TodoList(props) {
    const classes = useStyles();
    const initialState ={
        todoList:[
            {item:"Today"},
            {item:"Personal"},
            {item:"Planned"},
            {item:"Work"}
        ]
    }
    const [todolistDetails, settodolistDetails] =React.useState(initialState)

    const handleClick = (item)=>{
        axios.get(`http://localhost:2020/task/get/todaytasks/${localStorage.getItem('login email')}`)
            .then(res=>{
                console.log(res.data,"Today................")
                props.setBackendData(res.data[0])
            })
            .catch(err=>{
                console.log(err,"error from backend....")
            })

        axios.get(`http://localhost:2020/task/get/${item}/tasks/${localStorage.getItem('login email')}`)
            .then(res=>{
                console.log(res.data,"typessssssss................")
                props.setTaskTypeAction(res.data)
            })
            .catch(err=>{
                console.log(err,"error from backend....")
            })       
    }
    return (
        <div>
            {/* <Grid container justify="space-evenly"> */}
            <Container>
                <Grid className={classes.Gridspacing}>
                    {todolistDetails.todoList.map((eachitem,index)=>
                        <div key={index}>
                            <Link to={eachitem.item} style={{textDecoration:"none"}}>
                            <Paper elevation={3}
                            style={{cursor:"pointer"}}
                            className={classes.PaperStyle}
                            onClick={()=>handleClick(eachitem.item)}
                            >
                                <Typography variant="h1" component="h3" style={{fontFamily: 'serif',fontSize:20}}>
                                    <IconButton>
                                    {eachitem.item==="Today" ? 
                                    <WbSunnyIcon fontSize="large" style={{color:"#FAFD0F"}} />
                                    
                                    : eachitem.item==="Planned" ? 
                                    <ListAltIcon fontSize="large" color="primary" />:
                                    eachitem.item==="Personal" ? 
                                    <PersonIcon fontSize="large" color="primary" /> :
                                    <WorkIcon fontSize="large" color="primary" />}
                                    </IconButton>
                                    {eachitem.item} Tasks     
                                </Typography> 
                            </Paper>
                            </Link>
                            <br />
                        </div>)} 
                </Grid>    
                </Container>          
            {/* </Grid> */}
        </div>
    )
}
//Redux Actions...
const mapDispatchProps = dispatch =>{
    return{
        setBackendData:(data)=>dispatch({type:"DATA_FROM_BACKEND",payload:data}),
        setTaskTypeAction:(data)=>dispatch({type:"DATA_FROM_TASK_TYPE",payload:data})
    }
}
export default connect(null,mapDispatchProps)(TodoList);

