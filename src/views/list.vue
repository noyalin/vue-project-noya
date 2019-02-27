<template>
  <div class="list-container">
    <div class="row">
      <div class="col-md-2"><input class="form-control" placeholder="性别" v-model="condition.gender"/></div>
      <div class="col-md-2"><a-button type="primary" @click="getList">search</a-button></div>
    </div>


    <a-table
      :rowKey = "record => record.login.uuid"
      :columns="columns"
      :dataSource="products"
      @change="handleTableChange"
    >
      <a slot="operation" slot-scope="text, record, index" href="javascript:;" @click="()=>edit(text, record, index)">查看</a>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: "性别",
    dataIndex: "gender",
    key: "gender"
  },
  {
    title: "邮件",
    dataIndex: "email",
  },
  {
    title: "电话",
    dataIndex: "phone"
  },
  {
    title: '操作',
    key: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
];

import { mapState, mapActions } from 'vuex'
import {
  List,
  Button,
  Form,
  Table,
  Input,
  Select
} from "ant-design-vue";
export default {
  name: "list",
  data() {
    return {
      columns,
      condition:{
        gender:''
      }
    }
  },
  created:function () {
    this.getList()
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      const pager = { ...this.users.pagination };
      pager.current = pagination.current;
      this.users.pagination = pager;
      this.$options.asyncData(
        { store: this.$store, route: this.$route },
        {
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters
        }
      );
    },
    getList(){
      this.$store.dispatch('products/getAllProducts',this.condition)
    },
    edit(text, record, index){
      const  id = parseInt(record.id);
      this.$router.push({ name: 'detailA', params: { 'id':id }})
    }
  },
  computed: mapState({
    products: state => state.products.all
  }),
  components:{
    AList: List,
    AButton: Button,
    AForm: Form,
    ATable: Table,
    AInput: Input,
    ASelect: Select,
    AOption: Select.Option,
  }
}
</script>

<style scoped>

</style>
