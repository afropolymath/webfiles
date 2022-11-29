import { createStore } from "vuex";

import users from "./modules/users";
import files from "./modules/files";

export default createStore({
  modules: {
    files,
    users
  }
});
