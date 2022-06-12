import Network from '@network';
import Log from '@log';

export const requestApi = async (
  navigation,
  firstName,
  lastName,
  email,
  password,
  onSuccess,
  onFailed,
) => {
  navigation.navigate('Loading');
  try {
    const response = await Network.SIGN_UP(
      firstName,
      lastName,
      email,
      password,
    );
    Log.Success(response);
    navigation.goBack();
    onSuccess();
  } catch (error) {
    navigation.goBack();
    Log.Error(error);
    onFailed(error);
    return {
      data: null,
      error: error,
    };
  }
};
