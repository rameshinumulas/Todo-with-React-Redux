import React from 'react';
import { makeStyles } from '@material-ui/core';
import { List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText } from '@material-ui/core';
import { Container,IconButton,Typography,Button } from '@material-ui/core';
import ScheduleIcon from '@material-ui/icons/Schedule';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
//Third party...
import axios from 'axios';
import {connect} from 'react-redux'
import {useSnackbar} from 'notistack';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 560,
    backgroundColor: theme.palette.background.paper,
    margin:5,
    align:"center"
  },
  strikeline:{
    textDecoration:" line-through"
  }
}));


function Work_type(props) {
  const classes = useStyles();
  const [strike_line, setstrike_line] = React.useState(false)
  const [idstate, setidstate] = React.useState('')
  const Tasktype = "Work"
  const { enqueueSnackbar } = useSnackbar();


  console.log(props.displayData,"ooooooooooooo")
  const handleDelete_task = (id)=>{
    setstrike_line(true)
    setidstate(id)
    console.log(id,"iiiiiiiiiiiiiiiiiiii");
    axios.get(`http://localhost:2020/task/delete/${id}/${localStorage.getItem('login email')}/${Tasktype}`)
    .then(res=>{
        console.log(res.data,"dddddddddddddddddddddd")
        props.setTaskTypeAction(res.data)
    })
    .catch(err=>{
        console.log(err,"error from backend....")
    })
    enqueueSnackbar('Your task has been removed from your tasks !!!');    


}
  return (
    <div >
      <Button variant="contained" color="secondary">
      <Link to ='/NewTask'style={{textDecoration:"none",color:"whitesmoke"}} >BACK</Link>
      </Button>
      <Container maxWidth="sm">
    <List className={classes.root} >
    {props.displayData.length !==0 ? props.displayData.map((value,index) => {
        return (
          <ListItem key={index} 

          // onClick={handleToggle(value.name)}
          className={strike_line && idstate===value.id ? classes.strikeline :null } 
          > 
            <IconButton edge="start" aria-label="date" >
              <ScheduleIcon style={{fontSize:28}}/>
            </IconButton>
            <ListItemText
            primary="started date"
            secondary={value.date} />
            <ListItemText
              primary={value.title}
              secondary={
                <React.Fragment>
                  {value.task}
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction onClick={()=>handleDelete_task(value.id)}>
              <IconButton edge="end" aria-label="comments">
                <HighlightOffIcon color="error"  fontSize="inherit" />
              </IconButton>
            </ListItemSecondaryAction >
          </ListItem>
        );
      }) : <Typography 
            variant="inherit" 
            component="h2">
            you don't have tasks yet...
          </Typography> } 

    </List>
    </Container>
    </div>
  );
}
//Redux...
const mapStateProps = (state)=>{
  return {
    displayData:state.task_type_data
  }
}
//Redux Actions...
const mapDispatchProps = dispatch =>{
    return{
        setTaskTypeAction:(data)=>dispatch({type:"DATA_FROM_TASK_TYPE",payload:data})
    }
  }

export default connect(mapStateProps,mapDispatchProps)(Work_type);
