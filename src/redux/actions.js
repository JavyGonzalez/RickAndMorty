import { type } from "@testing-library/user-event/dist/type";

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';

export const add_fav = (character)=>{
    return {
        type: ADD_FAV,
        payload: character,
    }
};

export const remove_fav = (id)=>{
    return  {
        type: REMOVE_FAV,
        payload: id,
    }
}; 

export const filterCards = (gender)=>{
    return {
        type: 'FILTER',
        payload: gender
    }
}

export const orderCards = (order)=>{
    return {
        type: 'ORDER',
        payload: order
    }
}