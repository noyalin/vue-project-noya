<template>
  <div id="left-menu">
    <ul>
      <li v-for="m in menu" :key="m.url" :class="{active:m.active}" @click="buildMenu">
        <v-link :href="m.url">{{m.title}}</v-link>
        <ul v-if="m.children">
          <li v-for="c in m.children" :key="c.url" :class="{active:c.active}">
            <v-link :href="c.url">{{c.title}}</v-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import VLink from '../components/VLink.vue'

export default {
  name: "left-menu",
  data() {
    return {
      menu: [
        {title: 'home', url: '/'},
        {title: '列表1', url: '/list'},
        {
          title: '列表2', url: '', children: [
            {title: '列表2-child', url: '/listB/child'}
          ]
        },
      ]
    }
  },
  created() {
    console.log(this.$route)
    this.buildMenu()

  },
  components: {
    VLink
  },
  methods: {
    buildMenu() {
      const path = this.$route.path;

      this.menu.forEach(d => {
        d.active = path === d.url
        if(d.children){
          d.children.forEach(c=>{
            c.active = c.url === path
            d.active = c.url === path
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  ul > li {
    padding-left: 20px;
  }

  ul > li ul {
    list-style-type: circle;
    padding-left: 30px;
  }
</style>
