import StudentReducer from './Data/Reducer'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
console.log(StudentReducer)
export const store=createStore(StudentReducer,applyMiddleware(thunk))
console.log(store.getState())
store.subscribe(()=>console.log("State",store.getState()))