<template>
  <div>Parent</div>
  <MyChild />
</template>

<script>
import MyChild from "./MyChild.vue";
export default {
  components: { MyChild },
  name: "MyParent",
};
</script>
