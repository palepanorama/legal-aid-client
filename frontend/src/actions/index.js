export const getAttorneys = () => {
    return dispatch => {
      dispatch({ type: "LOADING" })
      fetch("http://localhost:3001/attorneys")
        .then(resp => resp.json())
        .then(attorneys => dispatch({ type: "SET_ATTORNEYS", attorneys }))
    }
  }