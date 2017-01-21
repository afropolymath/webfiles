<template>
  <div class="base-page">
    <div id="login-box">
      <div class="logo">
        <img src="../assets/img/logo_large.png"/>
      </div>
      <form @submit.prevent="loginUser" class="login-form">
        <div class="form-item">
          <input type="email" name="email" placeholder="E-mail address" v-model="user.email"/>
        </div>
        <div class="form-item">          
          <input type="password" name="password" placeholder="Password" v-model="user.password"/>
        </div>
        <div class="form-errors" v-if="error.display">{{error.message}}</div>
        <div class="form-actions">
          <button type="submit" v-bind:class="{'busy': isLoading}">
            <span v-if="!isLoading">Login</span>
            <svg v-if="isLoading" width="15px" height="15px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-pacman">
              <rect x="0" y="0" width="15" height="15" fill="none" class="bk"/>
              <path d="M0 50A50 50 0 1 0 100 50" fill="#ffffff" transform="rotate(30 50 50)">
                <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" from="30 50 50" to="30 50 50" values="30 50 50;0 50 50;30 50 50"/>
              </path>
              <path d="M0 50A50 50 0 1 1 100 50" fill="#ffffff" transform="rotate(-30 50 50)">
                <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" from="-30 50 50" to="-30 50 50" values="-30 50 50;0 50 50;-30 50 50"/>
              </path>
            </svg>
          </button>
        </div>
        <p class="text-center">Don’t have an account yet? <a href="#">Create one now</a></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      isLoading: false,
      error: { display: false, message: '' },
    };
  },
  methods: {
    loginUser() {
      const vm = this;
      vm.resetState();
      vm.isLoading = true;
      vm.$store.dispatch('users/loginUser', this.user)
      .then(() => {
        vm.isLoading = false;
        vm.$router.push({ name: 'dashboard' });
      })
      .catch((response) => {
        vm.isLoading = false;
        vm.displayError(response.body.message);
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
      this.error.message = '';
    },
  },
};
</script>

<style lang="sass?outputStyle=expanded">
$default-text-size: 15px;
$small-text-size: 13px;
$default-text-color: #595959;
$default-font: "Din Pro";
$inverted-text-color: #FFFFFF;
$default-site-roundness: 2px;
$error-color: #FF6F59;
$success-color: #60D394;

@function tint($color, $percentage) {
  @return mix(white, $color, $percentage);
}

@function shade($color, $percentage) {
  @return mix(black, $color, $percentage);
}

body {
  background: #F9F9F9;
  font-family: $default-font;
}

p {
  font-size: $small-text-size
}

a {
  color: #617C9C;
  font-weight: 700;
  text-decoration: none;
}

.text-center {
  text-align: center;
}

.base-page {
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

#login-box {
  width: 400px;
  background: #FFF;
  padding: 60px 30px 120px 30px;
  border: 1px solid #E7E7E7;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.08);
  border-radius: 5px;
  .logo {
    text-align: center;
    margin-bottom: 60px;
  }
}

.form-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  input[type="text"], input[type="email"], input[type="password"] {
    flex-grow: 1;
    border: solid 1px #EBEBEB;
    border-radius: 2px;
    display: block;
    padding: 15px;
    border-radius: $default-site-roundness;
    font-family: $default-font;
    font-size: $default-text-size;
    color: $default-text-color;
    transition: .3s border;
    &:focus {
      border-color: #FBC807;
      outline: none;
    }
  }
}

.form-actions {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  button {
    position: relative;
    display: block;
    background: #617C9C;
    padding: 15px 0;
    text-align: center;
    color: #FFF;
    border: none;
    border-radius: $default-site-roundness;
    font-family: $default-font;
    font-size: $default-text-size;
    color: $inverted-text-color;
    transition: .3s background;
    cursor: pointer;
    &:after {
      content: "→";
      display: flex;
      align-items: center;
      position: absolute;
      right: 15px;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
    &:hover {
      background: shade(#617C9C, 20%);
    }
    &:focus {
      outline: none;
    }
    &.busy {
      background: tint(#617C9C, 40%);
    }
  }
}

.form-errors {
  font-size: 0.8em;
  background: $error-color;
  padding: 15px 20px;
  line-height: 1.57em;
  color: #fff;
  border-radius: $default-site-roundness;
}
</style>