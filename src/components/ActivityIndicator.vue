<template>
  <div class="base-component c-activity-indicator">
    <svg width="35px" height="35px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-pacman">
        <rect x="0" y="0" width="35" height="35" fill="none" class="bk"/>
        <path d="M0 50A50 50 0 1 0 100 50" fill="#FAC72F" transform="rotate(30 50 50)">
          <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" from="30 50 50" to="30 50 50" values="30 50 50;0 50 50;30 50 50"/>
        </path>
        <path d="M0 50A50 50 0 1 1 100 50" fill="#FAC72F" transform="rotate(-30 50 50)">
          <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" from="-30 50 50" to="-30 50 50" values="-30 50 50;0 50 50;-30 50 50"/>
        </path>
      </svg>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.c-activity-indicator {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  height: 35px;
  width: 35px;
  margin: auto auto;
}
</style>