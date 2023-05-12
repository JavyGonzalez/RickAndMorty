import { ADD_FAV, REMOVE_FAV } from "./actions";
const initialState = {
    myFavorites: [],
    allCharactres: [],
};

const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_FAV:
            let copy1 = state.allCharactres;
            copy1.push(action.payload);
            return {...state, 
                myFavorites: copy1,
                allCharactres: copy1
            };
        case REMOVE_FAV:
            let copy2 = state.myFavorites.filter((char)=> {
                return char.id !== Number(action.payload);
            })
            return {...state, 
                myFavorites: copy2
            }
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

