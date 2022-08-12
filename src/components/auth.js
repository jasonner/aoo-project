import Cookies from './cookie';

var cookieName = 'boehringer0727openid';
export default {
  isAuthed() {
    return Cookies.get(cookieName);
  },
  testAuth() {
    Cookies.set(cookieName, 'boehringer0727openid', {path: '/'});
  },
  logout: function () {
    Cookies.remove(cookieName, {path: '/'});
  }
}
