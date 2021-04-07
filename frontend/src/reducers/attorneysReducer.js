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
        case "ADD_ATTORNEY":
            return {
                ...state,
                attorneys: [...state.attorneys, action.attorney]
            }
        default: 
            return state;
    }
}

export default attorneysReducer;