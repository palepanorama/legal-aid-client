export const getAttorneys = () => {
    return dispatch => {
      dispatch({ type: "LOADING" })
      fetch("http://localhost:3001/attorneys")
        .then(resp => resp.json())
        .then(attorneys => dispatch({ type: "SET_ATTORNEYS", attorneys }))
    }
  }


  export const addAttorney = (attorney, history) => {
    return dispatch => {
      fetch('http://localhost:3001/attorneys', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ attorney })
      })
        .then(resp => resp.json())
        .then(attorney => {
          dispatch({ type: "ADD_ATTORNEY", attorney })
          history.push("/attorneys")
        })
    }
  }
