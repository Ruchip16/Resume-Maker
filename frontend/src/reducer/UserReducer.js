
export const initialState=false;

export const reducer=(state,action)=>{
    if(action.type==="USER"){
        console.log("check");
        return action.payload;
    }
    return state; 
}
