import { GET_LIST_ORDER, UPDATE_LIST_ORDER, ADD_LIST_ORDER } from '../actions/listOrder';

const initialState = [];

function listOrder(state = initialState,action) {
    switch(action.type){
        case GET_LIST_ORDER:
        return action.data;
        case UPDATE_LIST_ORDER:
        return action.data;
        case ADD_LIST_ORDER:
        return action.data;
        default:
        return state;
    }
}

export default listOrder;