import React from 'react'
import {Button, Container, Divider, Grid, TextField, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import {Card,
        CardActions,
        CardContent,
        CardHeader} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {InputLabel,
        MenuItem,FormControl,IconButton} from '@material-ui/core';
import {Select} from '@material-ui/core';

import axios from 'axios';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme)=>({
    root: {
    //   minWidth: 445,
    fontFamily:"Helvetica,Arial,sans-serif",

    },
    AddButton:{
        justifyContent:"center"
    },
    avatar: {
        Color: 'primary',
      },
    title: {
      fontSize: 24,
    },
}));


function Todostore(props) {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();    
    const [open, setOpen] = React.useState(false);
    const HandleButton = (variant)=>{
        const data = {
            task:props.textField,
            title:props.taskTitle,
            taskType:props.taskTypeCheck
        }
       
        console.log(data,"frontend_data")
        axios.post("http://localhost:2020/task/usertasks",[localStorage.getItem("login email"),data])
        .then(res=>{
            console.log(res.data.tasks.Tasks,"backend responce.....")
            props.setBackendData(res.data.tasks.Tasks)
            props.setbackendError(res.data.msg)
            if(res.data.msg){
                alert(res.data.msg)
                props.setBackendData([])
            }
            else{
                props.onChangeTaskTitle('')
                props.onChangeTaskCreate('')
                props.onChangeTaskType('')
                props.setbackendError('')
            enqueueSnackbar('Your task has been submited !!!', { variant });

            }
        })
        .catch(err=>{
            console.log(err,"error from backend....")
        })
    } 
    const handleClose = () => {
        setOpen(false);
      };
      const handleOpen = () => {
        setOpen(true);
      };
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const present_date=today.toDateString()
    return (
        <div>
            {/* <Grid container> */}
            <Container>
                <Card className={classes.root} variant="outlined">
                    <CardHeader
                        avatar={
                            <IconButton aria-label="settings">
                            <AssignmentIcon color="primary"  fontSize="large"/>
                            </IconButton>
                        }
                        fontSize="20px"
                        title="NEW TASK "
                        subheader={present_date}
                    />
                    <Divider />
                    <Divider />
                    <CardContent>
    
                    <TextField id="task-title" fullWidth label="Add title to your task"
                        type="text"
                        multiline
                        value={props.taskTitle}
                        onChange ={(e)=>props.onChangeTaskTitle(e.target.value)}
                    /><br />
                     
                     <TextField fullWidth id="multiline-task" label="task" 
                         type="text"
                         multiline
                         rowsMax={40}
                         value={props.textField}
                         onChange={(e)=>props.onChangeTaskCreate(e.target.value)}
                     />
                     <br />  
                    <FormControl fullWidth className={classes.formControl}>
                        <InputLabel id="demo-controlled-open-select-label" >Task type</InputLabel>
                        <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={props.taskTypeCheck}
                        onChange={(e)=>props.onChangeTaskType(e.target.value)}
                        >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value="Personal">Personal</MenuItem>
                        <MenuItem value="Planned">Planned</MenuItem>
                        <MenuItem value="Work">Work</MenuItem>

                        </Select>
                    </FormControl> 

                    </CardContent>
                    <CardActions className={classes.AddButton}>
                    <Button type="submit" 
                        variant ="contained"
                        color="secondary"
                        onClick={()=>HandleButton("success")}>Add Task</Button>
                    </CardActions>
                    </Card>
                    </Container>
                {/* </Grid> */}
                
            </div>
        )
}

//Redux....
const mapStateProps =state=>{
    return {
        textField:state.taskName,
        taskTypeCheck:state.taskType,
        taskTitle:state.taskTitle,
        errorMessage:state.errorMsg
    }
}
//Redux Actions...
const mapDispatchProps = dispatch =>{
    return{
        onChangeTaskCreate:(value)=>dispatch({type:"TASK_INPUT",payload:value}),
        onChangeTaskType:(value)=>dispatch({type:"TASK_TYPE",payload:value}),
        onChangeTaskTitle:(value)=>dispatch({type:'TASK_TITLE',payload:value}),
        setBackendData:(data)=>dispatch({type:"DATA_FROM_BACKEND",payload:data}),
        setbackendError:(data)=>dispatch({type:"DATA_ERROR",payload:data})
    }
}



export default connect(mapStateProps,mapDispatchProps)(Todostore);