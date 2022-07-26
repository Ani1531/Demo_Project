import {baseURL} from './Constant';

class RequestMngr {
  getLogin = loginData => {
    return fetch(baseURL + '/user/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
  };

  getMenu = token => {
    return fetch(baseURL + '/user/menu', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
  };
}
const requestMngr = new RequestMngr();
export default requestMngr;
