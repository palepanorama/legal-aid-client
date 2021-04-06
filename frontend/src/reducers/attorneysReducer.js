const initialState = {
    attorneys: [],
    loading: true
}

const attorneysReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading:true
            }
        default: 
            return state;
    }
}

export default attorneysReducer;