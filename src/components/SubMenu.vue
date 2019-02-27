<template>
  <div class="sub-menu" :class="{hide: !show}" >
    <a class="return" @click="goBack">返回</a>
    <ul>
      <li v-for="m in menu" :class="{active: active === m.name}">{{m.title}}</li>
    </ul>
    <div class="icon" @click="isExpand">
      <a-icon v-if="show" type="left" />
      <a-icon v-else type="right" />
    </div>
  </div>
</template>

<script>
import {
  Icon
} from "ant-design-vue";
export default {
  name: "sub-menu",
  props: ['menu'],
  data() {
    return {
      active: '',
      show: true,
    }
  },
  created() {
    console.log(this.menu)
    console.log(this.$route)
    this.active = this.$route.name;
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    isExpand(){
      this.show = !this.show;
    }
  },
  components:{
    AIcon: Icon
  }
}
</script>

<style scoped>
  .sub-menu {
    width: 200px;
    height: 100%;
    background: #fafafa;
    position: relative;
  }

  .sub-menu ul li {
    text-align: center;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #fff;
  }

  .sub-menu ul li.active {
    background: #42b983;
    color: #fff;
  }

  .return {
    background: moccasin;
    display: block;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff!important;
  }

  .icon{
    width: 20px;
    height: 30px;
    line-height: 30px;
    background: moccasin;
    position: absolute;
    right: -20px;
    top: 40%;
    text-align: center;
    cursor: pointer;
  }
  .hide{
    width: 0;
  }
</style>
