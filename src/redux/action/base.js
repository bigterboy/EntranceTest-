import ActionConstant from '@action_constant';

const increase = () => ({type: ActionConstant.INCREASE, payload: 1});
const decrease = () => ({type: ActionConstant.DECREASE, payload: 1});

export {increase, decrease};
