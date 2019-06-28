<template>
<div>
  <Nav></Nav>
  <form>
    <div class="form-group">
      <label for="email">이메일:</label>
      <input type="email" class="form-control" id="email" placeholder="이메일 예: id@domain.com">
    </div>
    <div class="form-group">
      <label for="password">패스워드:</label>
      <input type="password" class="form-control" id="password" placeholder="패스워드 예: password">
    </div>
    <div class="checkbox">
      <label><input type="checkbox"> Remember me</label>
    </div>
    <button class="btn btn-default" @click="get">조 회</button>
    <button class="btn btn-default" @click="post">입 력</button>
    <button class="btn btn-default" @click="put">수 정</button>
    <button class="btn btn-default" @click="del">삭 제</button>
  </form>
  <Footer></Footer>
</div>
</template>

<script>
import Nav from '@/components/common/Nav.vue'
import Footer from'@/components/common/Footer.vue'
import axios from 'axios'

export default {
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      context: 'http://localhost:9000'
    }
  },
  methods: {
    get() {
      axios.get(`${this.context}/customers/count`)
      .then(d => {
        alert(`SUCCESS : ${d.data}`)
      })
      .catch(e => {
        alert('ERROR')
      })
    },
    post()  {
      axios.post('/customers')
      .then(d => {
        alert(`POST 연동성공 : ${d.data.result}`)
      })
    },
    put()  {
      axios.put('/customers/id')
      .then(d => {
        alert(`PUT 연동성공 : ${d.data.result}`)
      })
    },
    del()  {
      axios.delete('/customers/id')
      .then(d => {
        alert(`DELETE 연동성공 : ${d.data.result}`)
      })
    }
  }
}
</script>

<style scoped>

</style>