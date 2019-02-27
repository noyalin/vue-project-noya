<template>
  <div class="sub-main clearfix">
    <div class="left sub">
      <SubMenu :menu="menu"></SubMenu>
    </div>
    <div class="right sub">
      <div class="row">
        <div class="title col-md-12">详情</div>
      </div>
      <div class="row">
        <div class="col-md-12">此处省略一万字。。。</div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <a-tabs defaultActiveKey="1" @change="callback">
            <a-tab-pane tab="Tab 1" key="1">Content of Tab Pane 1</a-tab-pane>
            <a-tab-pane tab="Tab 2" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
            <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>
          </a-tabs>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import SubMenu from '../components/SubMenu'
import {
  Tabs
} from "ant-design-vue";

export default {
  name: "detail",
  data() {
    return {
      menu: [{title: '详情', name: 'detailA'}]
    }
  },
  methods:{
    callback(){
      console.log('change')
    }
  },
  components: {
    SubMenu,
    ATabs: Tabs,
    ATabPane: Tabs.TabPane
  }
}
</script>

<style scoped>

</style>
