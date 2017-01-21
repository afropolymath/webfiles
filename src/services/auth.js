import Vue from 'vue';

const baseURL = 'http://localhost:5000/api/v1';

const url = endpoint => `${baseURL}/${endpoint}`;

export default {
  login(user) {
    return Vue.http.post(url('auth/login'), user);
  },
  register(user) {
    return Vue.http.post(url('auth/register'), user);
  },
  testToken(user) {
    return Vue.http.get(url('auth/tokentest'), { headers: { Authorization: user.token } });
  },
};
