<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        此处查询用的是watch
      </div>
    </div>
    <div class="row">
      <div class="col-md-2"><input class="form-control" placeholder="地址" v-model="condition.addressName"/></div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <a-table :columns="columns" :dataSource="address" bordered>
          <template slot="title" slot-scope="currentPageData">
            Header
          </template>
          addr
          <template slot="footer" slot-scope="currentPageData">
            Footer
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {
  List,
  Button,
  Form,
  Table,
  Input,
  Select
} from "ant-design-vue";

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Cash Assets',
  className: 'column-money',
  dataIndex: 'money',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

export default {
  name: "list-b-child",
  data() {
    return {
      columns,
      condition: {
        addressName: ''
      }
    }
  },
  created: function () {
    this.getList()
  },
  computed: mapState({
    address: state => state.address.all
  }),
  methods: {
    getList() {
      this.$store.dispatch('address/getAllAddress', this.condition)
    },
  },
  watch: {
    'condition.addressName': function (val, oldVal) {
      this.getList()
    }
  },
  components: {
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
  th.column-money,
  td.column-money {
    text-align: right !important;
  }
</style>
