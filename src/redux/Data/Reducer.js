import { SET_IS_LOGGED_IN } from "./Types"

const initialState={
    todayPresentStudents:[],
    todayAbsentStudents:[],
    allStudents:[],
    LoggedIn:false
}


export default (state = initialState, action) => {
    
    switch (action.type) {
        
        case SET_IS_LOGGED_IN:
            return{
                ...state,LoggedIn:true
            }
        default:
            return state
    }
}
