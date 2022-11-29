import { Base } from "./base";

export default {
  login(user) {
    return Base.post("auth/login", user);
  },
  register(user) {
    return Base.post("auth/register", user);
  },
  testToken() {
    return Base.get("auth/tokentest");
  }
};
