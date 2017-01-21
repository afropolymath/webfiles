import Vue from 'vue';

const baseURL = 'http://localhost:5000/api/v1';

const url = endpoint => `${baseURL}/${endpoint}`;

export default {
  list(user) {
    return Vue.http.get(url(`users/${user.id}/files`), { headers: { Authorization: user.token } });
  },
  view(user, file) {
    return Vue.http.get(url(`users/${user.id}/files/${file.id}`), { headers: { Authorization: user.token } });
  },
  delete(user, file, hardDelete) {
    let baseURI = url(`users/${user.id}/files/${file.id}`, { headers: { Authorization: user.token } });
    if (hardDelete) {
      baseURI += '?hard_delete=true';
    }
    return Vue.http.delete(baseURI);
  },
  create(user, form) {
    return Vue.http.post(url(`users/${user.id}/files/`), form, { headers: { Authorization: user.token } });
  },
  edit(user, file, form) {
    return Vue.http.put(url(`users/${user.id}/files/${file.id}`), form, { headers: { Authorization: user.token } });
  },
};
