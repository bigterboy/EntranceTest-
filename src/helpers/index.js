import Log from '@log';
import Config from 'react-native-config';

export const LogImportInfoWhenStart = () => {
  Log.NeedCheck(`BASE_URL: ${Config.BASE_URL}`);
};
