import { createContext, useContext, useReducer } from "react";

const AppReducer = (state,action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses:[...state.expenses,action.payload],
            };
        case 'DELETE_EXPENSE':console.log("action",state,action);
            return {
                ...state,
                expenses:state.expenses.filter((item)=>item.id!==action.payload),
            }
        default: return state;
    }

}
const intialState = {
    budget:2000,
    expenses:[
        {id:123451,name:"Shopping",expense:1500},
        {id:123452,name:"Holiday",expense:800},
        {id:123453,name:"Fuel",expense:600},
    ],
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state,dispatch] = useReducer(AppReducer,intialState);
    const totalExpenses = state.expenses.reduce((total,item)=>total+=item.expense, 0);
    // const value = {};
    return (
        <AppContext.Provider value={{
            budget:state.budget,
            expenses:state.expenses,
            dispatch,
            totalExpenses
        }}>
            {props.children}
        </AppContext.Provider>
    )
};