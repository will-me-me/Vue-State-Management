<template>
  <div class="hello">
    <div class="left">
      <h1>{{ title }}</h1>
      <form @submit.prevent="addlink">
        <input
          type="text"
          placeholder="Add a Link"
          class="link-input"
          v-model="newlink"
        />
      </form>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          {{ link }}
        </li>
      </ul>
    </div>
    <div class="right">
      <stats />
    </div>
  </div>
</template>

<script>
import stats from "../components/stats.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      newlink: "",
    };
  },
  components: { stats },
  computed: mapState(["title", "links"]),
  methods: {
    ...mapMutations(["ADD_LINK"]),
    addlink: function () {
      this.ADD_LINK(this.newlink);
      this.newlink = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
#app,
.home {
  height: 100%;
}
body {
  background-color: #f4f4f4;
  margin: 0;
  height: 100%;
}

.hello {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100%;
  grid-template-areas: "left right";
  height: 100%;
}

.left,
.right {
  padding: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  padding: 20px;
  background: white;
  margin-bottom: 8px;
}

.right {
  grid-area: right;
  background-color: #e9e9e9;
}
input {
  border: none;
  padding: 20px;
  width: calc(100% - 40px);
  box-shadow: 0 5px 5px lightgrey;
  margin-bottom: 50px;
  outline: none;
}
</style>
