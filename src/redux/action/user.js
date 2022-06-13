import ActionConstant from '@action_constant';

const saveUser = payload => ({
  type: ActionConstant.SAVE_USER,
  payload: payload,
});

export {saveUser};
