
const intialState = {
    // newpersonTasks:[],
    // singlePersonTasks:null
    taskName:'',
    taskTitle:'',
    taskType:'',
    usertasks_for_display:[],
    task_type_data:[],
    errorMsg:''  
}

const Reducer = (state=intialState,action)=>{

    switch(action.type){
        case "TASK_INPUT":
            return {
                ...state,
                taskName:action.payload
            }
        case "TASK_TITLE":
            return{
                ...state,
                taskTitle:action.payload
            }
        case "TASK_TYPE":
            return{
                ...state,
                taskType:action.payload
            }
        case "DATA_FROM_BACKEND":
            return{
                ...state,
                usertasks_for_display:action.payload
            }
        case "DATA_FROM_TASK_TYPE":
            return {
                ...state,
                task_type_data:action.payload
            }
        case "DATA_ERROR":
            return {
                ...state,
                errorMsg:action.payload
            }
        default:
            return state
    }

}

export default Reducer;

