<template>
  <div class="base-page">
    <div id="form-box">
      <div class="logo">
        <img src="../assets/img/logo_large.png" />
      </div>
      <form @submit.prevent="registerUser" class="register-form">
        <div class="form-status" v-if="status.display">
          {{ status.message }}
        </div>
        <div class="form-item">
          <input
            type="text"
            name="fullname"
            placeholder="Fullname"
            v-model="user.fullname"
          />
        </div>
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
        <div class="form-item">
          <input
            type="password"
            name="passwordConf"
            placeholder="Confirm Password"
            v-model="user.password_conf"
          />
        </div>
        <div class="form-errors" v-if="error.display">{{ error.message }}</div>
        <div class="form-actions">
          <button type="submit" v-bind:class="{ busy: isLoading }">
            <span v-if="!isLoading">Register</span>
            <loading v-if="isLoading" />
          </button>
        </div>
        <p class="text-center">
          Already have an account? <a href="/">Login now</a>
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
      status: { display: false, message: "" },
      error: { display: false, message: "" },
    };
  },
  methods: {
    registerUser() {
      const vm = this;
      vm.resetState();
      vm.isLoading = true;
      vm.$store
        .dispatch("users/registerUser", this.user)
        .then(() => {
          vm.isLoading = false;
          vm.displayStatus(
            "Your account was successfully created. You may now proceed to login"
          );
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
    displayStatus(message) {
      this.status.display = true;
      this.status.message = message;
    },
    resetState() {
      this.error.display = false;
      this.error.message = "";
    },
  },
};
</script>
