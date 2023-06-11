//import { ADD_FAV, REMOVE_FAV } from "./actions";
const initialState = {
    myFavorites: [],
    allCharactres: [],
};

const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'ADD_FAV':
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        
        case 'REMOVE_FAV':
            return { ...state, myFavorites: action.payload };

        case 'FILTER':
                let copy3 = state.allCharactres.filter((char)=> {
                    return char.gender === action.payload;
                })
            return {...state, 
                    myFavorites: copy3
                }
        case 'ORDER':
                let copy4 = state.allCharactres;
                const order = copy4.sort((a, b) =>{
                    if(action.payload === 'A'){
                        return a.id - b.id;
                    }else if (action.payload === 'B'){
                        return b.id - a.id;
                    }else{
                        return 0;
                    }
                })
            return {...state, 
                    myFavorites: order
                }
        default:
            return{...state};
    }
}

export default rootReducer;

