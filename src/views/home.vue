<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8" v-for="item in list" :key="item.id">
              <a-card title="Card title" :bordered=false>
                <a @click="goUrl(item.url)">{{item.name}}</a>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <a-collapse accordion>
          <a-collapse-panel header="This is panel header 1" key="1">
            <p>{{text}}</p>
          </a-collapse-panel>
          <a-collapse-panel header="This is panel header 2" key="2" :disabled='false'>
            <p>{{text}}</p>
          </a-collapse-panel>
          <a-collapse-panel header="This is panel header 3" key="3">
            <p>{{text}}</p>
          </a-collapse-panel>
        </a-collapse>
      </div>
    </div>

  </div>

</template>

<script>
import {
  Collapse,
  Button,
  Card,
  Row,
  Col
} from "ant-design-vue";

export default {
  name: "home",
  data() {
    return {
      list: [
        {id: 1, name: '去 列表1', url: '/list'},
        {id: 2, name: '去 列表2', url: '/listB/child'},
        {id: 3, name: '哪里都不去', url: ''}
      ],
      text: '雷好哇'
    }
  },
  methods: {
    goUrl(url) {
      if (url) this.$router.push(url)
    }
  },
  components: {
    AButton: Button,
    ACard: Card,
    ARow: Row,
    ACol: Col,
    ACollapse: Collapse,
    ACollapsePanel: Collapse.Panel

  }
}
</script>

<style scoped>

</style>
