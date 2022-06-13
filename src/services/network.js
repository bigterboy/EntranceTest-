const axios = require('axios').default;
import Config from 'react-native-config';

// showLastCommitMessageForThisLibrary.js
import {create} from 'apisauce';

export default class NetworkRequest {
  static Method = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
  };

  static CONFIG = {
    'x-environment': 'APP',
    'Content-Type': 'application/json',
  };

  request = (method, url, params, data) => {
    const api = create({
      baseURL: 'http://streaming.nexlesoft.com:4000/api',
      headers: {
        'x-environment': 'APP',
        'Content-Type': 'application/json',
      },
      timeout: 30000,
    });

    return new Promise(function (resolve, reject) {
      api
        .any({
          method: method,
          url: url,
          params: params,
          data: data,
        })
        .then(response => {
          console.log('DATA REQUEST API: ', response);
          if (response?.data?.errors) {
            return reject(response?.data?.errors);
          }
          return resolve(response.data);
        })
        .catch(error => {
          console.log('CATCH ERROR REQUEST API', error);
          return reject(error.response);
        });
    });
  };

  handleError = error => {
    // switch (error.response.status) {
    //   case 400:
    //     return 'Bad request!';
    //   case 401:
    //     return 'Unauthorized!';
    //   case 403:
    //     return 'Unauthorized!';
    //   default:
    //     return;
    // }
    console.log('VO DAY KHONG');
  };
}
