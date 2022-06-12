import Network from '@network';
import Log from '@log';

export const requestApi = async () => {
  try {
    const response = await Network.TEST_BASE_API();
    Log.Success(response);
    return response;
  } catch (error) {
    Log.Error(error);
  }
};
