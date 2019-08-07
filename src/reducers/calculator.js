const initialState = {
  firstScreen: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_NUMBER': {
      const newfirstScreen = [...state.firstScreen];
      const { number } = action;

      if ((newfirstScreen.length === 0) && (number === '.')) {
        newfirstScreen.push('0');
      }
      newfirstScreen.push(number);

      return {
        ...state,
        firstScreen: newfirstScreen,
      };
    }
    case 'DEL_NUMBER': {
      let newfirstScreen = [...state.firstScreen];

      if (((newfirstScreen[newfirstScreen.length - 2] === '.') && (newfirstScreen[newfirstScreen.length - 3] === '0'))) {
        newfirstScreen = [];
      } else {
        newfirstScreen.pop();
      }

      return {
        ...state,
        firstScreen: newfirstScreen,
      };
    }
    case 'ERASE_ALL':
    case 'DEL_FIRST_SCREEN': {
      return {
        ...state,
        firstScreen: [],
      };
    }
    default:
      return state;
  }
};
