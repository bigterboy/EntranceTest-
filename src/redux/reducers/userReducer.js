import ActionConstant from '@action_constant';

const INIT_STATE = {
  user: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionConstant.SAVE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
