import { createStore } from 'redux'

const defaultState = {
    checkAll : false,
    checkDon : false
}

const reducer = (state = defaultState,action) => {
    switch(action.type){
        case "SET_ALL" :
            return {
                checkAll : ! state.checkAll,
                checkDon : ! state.checkDon
                
            }
        case "SET_DON":
            return {
            }
        default : 
        break;        
    }
    return state
}

const store = createStore(reducer);
export default store;