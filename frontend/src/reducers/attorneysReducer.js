const initialState = {
    attorneys: [],
    loading: true,
}

const attorneysReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state
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
        case "SORT_ATTORNEYS":
            return state.attorneys.slice().sort(function (location1, location2) {
                if (location1.name < location2.name) return -1;
                if (location1.name < location2.name) return 1;
                return 0;
            })
        default: 
            return state;
    }
}

export default attorneysReducer;