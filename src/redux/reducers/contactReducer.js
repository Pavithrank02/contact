const initialState = [
  {
    id:0,
    name: "Pavithran",
    number: 9790436040,
    email: "pavithran@gmail.com"
  }, 
  {
    id:1,
    name: "PavithranK",
    number: 9790436041,
    email: "pavithrank@gmail.com"
  }
]

const contactReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state
    default:
      return state;
  }
}

export default contactReducer