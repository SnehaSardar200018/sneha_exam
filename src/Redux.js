import axios from "axios";
import {combineReducers,createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const initial={
    name:"",
    email:"",
    password:"",
    role:"",
}
const Regreducer=(state=initial,action)=>{
    switch(action.type)
    {
        case "name": return{
            ...state,
            name:action.payload,
        }
        case "email": return{
            ...state,
            email:action.payload,
        }
        case "password": return{
            ...state,
            password:action.payload,
        }
        case "role": return{
            ...state,
            role:action.payload,
        }
        default: return state
    }
}
const Datareducer=(state=[],action)=>{
    switch(action.type)
    {
        case "FETCH": return action.payload;
        default: return state
    }
}

const rootReducer=combineReducers({
    Reg: Regreducer,
    Data:Datareducer
})
export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export const getData=(payload)=>{
        return{
            type:"FETCH",
            payload

        }
}
export const getFetch=()=>{
    return(dispatch)=>{
        axios.get("http://localhost:4000/register").then(res=>{
            dispatch(getData(res.data))
        })
    }
}
export const name=(e)=>{
    return{
        type: "name",
        payload: e
    }
}
export const email=(e)=>{
    return{
        type: "email",
        payload:  e
    }
}
export const password=(e)=>{
    return{
        type: "password",
        payload: e
    }
}
export const role=(e)=>{
    return{
        type: "role",
        payload: e
    }
}