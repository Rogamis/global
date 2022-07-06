import { ADD_TASK, ADD_TASKS, MODIFY_TASK, REMOVE_TASK, REMOVE_TASKS } from "../actions/tasksAction";

const initialState={
    tasks: []
}

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case ADD_TASKS:
      return{
        ...state,
        tasks: [...state.tasks, ...action.payload] 
      };
    case REMOVE_TASKS:
      return{
        ...state,
        tasks: []
      };
    case REMOVE_TASK:
      return{
        ...state,
        tasks: state.tasks.filter((task)=>{
          if(task.id === action.payload.id){
            return false
          }
          else{
            return true
          }  
        }) 
      }
      case MODIFY_TASK:
        return {
          ...state,
          tasks: state.tasks.map((task) => {
            if(task.id === action.payload.id){
              return {
                ...task,
                completed: action.payload.completed
              }
            }
            else{
              return task 
            }
          }),
        };

    default:
      return state;
  }
};

export default tasksReducer

