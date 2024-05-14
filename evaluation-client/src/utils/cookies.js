import jsCookies from 'js-cookie';

export default {
  get: (name) => {
    return jsCookies.get(name);
  },
  set: (name, value) => {
    jsCookies.set(name, value);
  }
}
