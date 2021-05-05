import {SET_IS_LOGGED_IN,} from './Types'

export const setIsLoggedin=(val)=>
{
    return{
        type:SET_IS_LOGGED_IN,
        payload:val,        
    }
}
