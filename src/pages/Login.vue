<template>
  <div class="base-page">
    <div id="form-box">
      <div class="logo">
        <img src="../assets/img/logo_large.png" />
      </div>
      <form @submit.prevent="loginUser" class="login-form">
        <div class="form-item">
          <input
            type="email"
            name="email"
            placeholder="E-mail address"
            v-model="user.email"
          />
        </div>
        <div class="form-item">
          <input
            type="password"
            name="password"
            placeholder="Password"
            v-model="user.password"
          />
        </div>
        <div class="form-errors" v-if="error.display">{{ error.message }}</div>
        <div class="form-actions">
          <button type="submit" v-bind:class="{ busy: isLoading }">
            <span v-if="!isLoading">Login</span>
            <loading v-if="isLoading" />
          </button>
        </div>
        <p class="text-center">
          Don’t have an account yet? <a href="/register">Create one now</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Loading from "../components/Loading.vue";

export default {
  components: { Loading },
  data() {
    return {
      user: {},
      isLoading: false,
      error: { display: false, message: "" },
    };
  },
  methods: {
    loginUser() {
      const vm = this;
      vm.resetState();
      vm.isLoading = true;
      vm.$store
        .dispatch("users/loginUser", this.user)
        .then(() => {
          vm.isLoading = false;
          vm.$router.push({ name: "folder", params: { folderId: "~" } });
        })
        .catch((response) => {
          vm.isLoading = false;
          vm.displayError(response.message);
        });
    },
    displayError(message) {
      this.error.display = true;
      this.error.message = message;
      setTimeout(() => {
        this.error.display = false;
      }, 7000);
    },
    resetState() {
      this.error.display = false;
      this.error.message = "";
    },
  },
};
</script>
