import Network from './network';
const netRequest2 = new Network();

const SIGN_UP = async (firstName, lastName, email, password) => {
  return new Promise(function (resolve, reject) {
    netRequest2
      .request('POST', 'auth/signup', null, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then(response => {
        console.log('OK: ', response);
        return resolve(response);
      })
      .catch(error => {
        console.log('error: ', error);
        return reject(error);
      });
  });
};

export default {
  SIGN_UP: SIGN_UP,
};
