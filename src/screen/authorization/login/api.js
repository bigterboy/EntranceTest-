import Network from '@network';
import Log from '@log';

export const requestApi = async () => {
  try {
    const response = await Network.SIGN_UP();
    Log.Success(response);
    return response;
  } catch (error) {
    Log.Error(error);
  }
};
