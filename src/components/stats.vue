<template>
  <div>
    <h1>A different component</h1>
    <p>There are currently {{ countLinks }} links</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "stats",
  computed: {
    ...mapGetters(["countLinks"]),
  },
};
</script>

<style></style>
