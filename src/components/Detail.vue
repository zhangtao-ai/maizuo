<template>
    <div class="details container">
        <router-link to="/" class="btn btn-default">返回</router-link>
        <h1 class="page-header">
            {{customer.name}}
            <span class="pull-right">
                <router-link class="btn btn-default" :to="'/edit/' + customer.id">编辑</router-link>
                <button class="btn btn-danger" @click="deleteCustomer(customer.id)" style="margin-left:8px">删除</button>
            </span>
        </h1>
        <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-earphone"> {{customer.phone}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope"> {{customer.email}}</span></li>
        </ul>

        <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-education"> {{customer.profession}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-user"> {{customer.profile}}</span></li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      customer: ''
    }
  },
  methods: {
    fetchCustomers (id) {
      this.$http.get('http://localhost:3000/users/' + id)
        .then(res => {
          //  console.log(res)
          this.customer = res.body
        })
    },
    deleteCustomer (id) {
      this.$http.delete('http://localhost:3000/users/' + id)
        .then(res => {
          this.$router.push({ path: '/', query: { alert: '用户信息添加成功' } })
        })
    }
  },
  created () {
    this.fetchCustomers(this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>

</style>
