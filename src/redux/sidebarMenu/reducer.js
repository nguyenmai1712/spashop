const initState = false;

const sideBarMenuReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'TOGGLE_MENU': {
      return payload;
    }
    default: {
      return state;
    }
  }
}

export default sideBarMenuReducer;