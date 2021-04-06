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
        case "SET_ATTORNEYS":
            return {
                ...state,
                loading: false,
                attorneys: action.attorneys
            }
        default: 
            return state;
    }
}

export default attorneysReducer;