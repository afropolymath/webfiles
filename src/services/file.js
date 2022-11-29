import { Base } from "./base";

export default {
  list(user) {
    return Base.get(`users/${user.id}/files`);
  },
  view(user, file) {
    return Base.get(`users/${user.id}/files/${file.id}`);
  },
  delete(user, file, hardDelete) {
    let baseURI = `users/${user.id}/files/${file.id}`;
    if (hardDelete) {
      baseURI += "?hard_delete=true";
    }
    return Base.delete(baseURI);
  },
  create(user, form) {
    return Base.postMultipart(`users/${user.id}/files`, form);
  },
  edit(user, file, form) {
    return Base.put(`users/${user.id}/files/${file.id}`, form);
  },
};
