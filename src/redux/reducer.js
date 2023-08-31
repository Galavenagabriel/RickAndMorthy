import { ADD_FAV, REMOVE_FAV } from "./actions";

let inicialState = {myFavorite:[]};

export default function rootReducer(state = inicialState, action) {
    switch(action.type){
    
     case ADD_FAV:
        return {
            ...state,
            myFavorite: [...state.myFavorite, action.payload]
        }    
    case REMOVE_FAV:
        return {
            ...state,
            myFavorite: state.myFavorite.filter(character => character.id !== Number(action.payload) )
        }

    default:
        return{
            ...state
        }    
    }
}