const initialState = {
  firstScreen: [],
  secondScreen: '',
  result: 0,
  operande: '',
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
    case 'ERASE_ALL': {
      return {
        ...state,
        firstScreen: [],
        secondScreen: '',
        result: 0,
        operande: '',
      };
    }
    case 'DEL_FIRST_SCREEN': {
      return {
        ...state,
        firstScreen: [],
      };
    }
    case 'ADD_OPERANDE': {
      const newfirstScreen = [...state.firstScreen];

      if (parseFloat(newfirstScreen.join('')) !== 0) {
        const actualOperande = state.operande;
        const newOperande = action.operande;

        let newResult = state.result;

        if (state.result === 0) {
          newResult = parseFloat(newfirstScreen.join(''));
        } else if (actualOperande === '+') {
          newResult += parseFloat(newfirstScreen.join(''));
        } else if (actualOperande === '-') {
          newResult -= parseFloat(newfirstScreen.join(''));
        } else if (actualOperande === 'x') {
          newResult *= parseFloat(newfirstScreen.join(''));
        } else if (actualOperande === '/') {
          newResult /= parseFloat(newfirstScreen.join(''));
        }

        const newSecondScreen = `${newResult}   ${newOperande}`;

        return {
          ...state,
          firstScreen: [],
          secondScreen: newSecondScreen,
          result: newResult,
          operande: newOperande
        };
      }
      return { ...state };
    }
    case 'INVERSE_NUMBER': {
      const newfirstScreen = [...state.firstScreen];
      const control = parseFloat(newfirstScreen.join(''));

      if (control < 0) {
        newfirstScreen.shift();
      } else if (control > 0) {
        newfirstScreen.unshift('-');
      }

      return {
        ...state,
        firstScreen: newfirstScreen,
      };
    }
    case 'FINISH_OPERATION': {
      const newFirstScreen = [...state.firstScreen];

      const actualOperande = state.operande;

      if (actualOperande === '/' && (parseFloat(newFirstScreen.join('')) === 0 || newFirstScreen.length === 0)) {
        return {
          ...state,
        };
      }
      let newResult = state.result;

      if (state.result === 0) {
        newResult = parseFloat(newFirstScreen.join(''));
      } else if (actualOperande === '+') {
        newResult += parseFloat(newFirstScreen.join(''));
      } else if (actualOperande === '-') {
        newResult -= parseFloat(newFirstScreen.join(''));
      } else if (actualOperande === 'x') {
        newResult *= parseFloat(newFirstScreen.join(''));
      } else if (actualOperande === '/') {
        newResult /= parseFloat(newFirstScreen.join(''));
      }

      const firstScreenDisplay = (`${newResult}`).split('');

      return {
        ...state,
        firstScreen: firstScreenDisplay,
        secondScreen: '',
        result: 0,
        operande: '',
      };
    }
    default:
      return state;
  }
};
