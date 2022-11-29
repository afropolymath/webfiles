<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
$default-text-size: 15px;
$small-text-size: 13px;
$default-text-color: #595959;
$default-font: "Avenir";
$inverted-text-color: #ffffff;
$default-site-roundness: 2px;
$error-color: #ff6f59;
$success-color: #60d394;

$status-color: #efefef;
$status-text-color: #323232;

@function tint($color, $percentage) {
  @return mix(white, $color, $percentage);
}

@function shade($color, $percentage) {
  @return mix(black, $color, $percentage);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: #f9f9f9;
  font-family: $default-font;
}

p {
  font-size: $small-text-size;
}

a {
  color: #617c9c;
  font-weight: 700;
  text-decoration: none;
}

.text-center {
  text-align: center;
}

.base-page {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

#form-box {
  width: 400px;
  background: #fff;
  padding: 60px 30px 120px 30px;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
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
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    flex-grow: 1;
    border: solid 1px #ebebeb;
    border-radius: 2px;
    display: block;
    padding: 15px;
    border-radius: $default-site-roundness;
    font-family: $default-font;
    font-size: $default-text-size;
    color: $default-text-color;
    transition: 0.3s border;
    &:focus {
      border-color: #fbc807;
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
    background: #617c9c;
    padding: 15px 0;
    text-align: center;
    color: #fff;
    border: none;
    border-radius: $default-site-roundness;
    font-family: $default-font;
    font-size: $default-text-size;
    color: $inverted-text-color;
    transition: 0.3s background;
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
      background: shade(#617c9c, 20%);
    }
    &:focus {
      outline: none;
    }
    &.busy {
      background: tint(#617c9c, 40%);
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

.form-status {
  font-size: 0.9em;
  background: $status-color;
  padding: 0.7em 1em;
  line-height: 1.57em;
  color: $status-text-color;
  border-radius: $default-site-roundness;
  margin-bottom: 1em;
}
</style>
