<template>
  <div class="hello">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <p>{{aa}}</p>  
  </div>
</template>

<script>

import { add,aa } from "../js/common";

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      aa:''
    }
  },
  created(){
    let that = this
    add(2);
    aa(3,5);
    that.aa = this.$store.state.login.useName
  },
  methods:{
    adda(){
      let aa = this 
      console.log("888")
        return this.$store.state.login.useName
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
