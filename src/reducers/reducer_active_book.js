//state arg is not app state only state this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case 'Book_Selected':
      return action.payload;
  }

  return state;
}
