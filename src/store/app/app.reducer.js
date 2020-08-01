export const IS_FOCUS_PHONE = 'IS_FOCUS_PHONE';

const initState = {
  isFocusSelect: false
};

export function setFocusSelect(val) {
  return dispatch => {
    dispatch({
      type: IS_FOCUS_PHONE,
      payload: val
    });
  };
}

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case IS_FOCUS_PHONE:
      return {
        ...state,
        isFocusSelect: action.payload
      };
    default:
      return state;
  }
}
