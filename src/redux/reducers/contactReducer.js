const initialState = [
  {
    id:0,
    name: "Pavithran",
    number: 9790436060,
  }, 
  {
    id:1,
    name: "PavithranK",
    number: 9790436061,
  }
]

const contactReducer = (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }
}

export default contactReducer