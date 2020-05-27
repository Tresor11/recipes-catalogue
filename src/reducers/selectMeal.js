const intialState = false;

const selectReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'MEAL_SELECTED':
      return action.selected;
    default:
      return state;
  }
};

export default selectReducer;
