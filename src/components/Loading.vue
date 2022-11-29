<template>
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    class="uil-pacman"
  >
    <rect x="0" y="0" width="15" height="15" fill="none" class="bk" />
    <path
      d="M0 50A50 50 0 1 0 100 50"
      fill="#ffffff"
      transform="rotate(30 50 50)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="1s"
        repeatCount="indefinite"
        from="30 50 50"
        to="30 50 50"
        values="30 50 50;0 50 50;30 50 50"
      />
    </path>
    <path
      d="M0 50A50 50 0 1 1 100 50"
      fill="#ffffff"
      transform="rotate(-30 50 50)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="1s"
        repeatCount="indefinite"
        from="-30 50 50"
        to="-30 50 50"
        values="-30 50 50;0 50 50;-30 50 50"
      />
    </path>
  </svg>
</template>

<script lang="javascript">
export default {}
</script>
