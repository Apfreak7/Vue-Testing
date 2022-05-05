<template>
  <div>
    <a id="home">Home</a>
    <a v-if="isLoggedIn" id="profile">My Profile</a>
  </div>
</template>

<script>
export default {
  name: "MyNav",
  data() {
    return {
      isLoggedIn: false,
    };
  },
};
</script>
