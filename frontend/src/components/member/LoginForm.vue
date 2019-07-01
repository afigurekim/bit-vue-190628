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
    <div class="form-group">
      <label for="customerid">아이디:</label>
      <input v-model="customerid" type="text" class="form-control" id="customerid" placeholder="아이디">
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
      context: 'http://localhost:9000/customers'
    }
  },
  methods: {
    count() {
      axios.get(`${this.context}/count`)
      .then(res => {
        alert(`SUCCESS : ${res.data}`)
      })
      .catch(e => {
        alert('ERROR')
      })
    },
    deleteById() {
      axios.delete(`${this.context}/1`)
      .then(res => {
        alert(`SUCCESS : ${res.data}`)
      })
      .catch(e => {
        alert('ERROR')
      })
    },
    existsById() {
      axios.get(`${this.context}/exists/1`)
      .then(res => {
        alert(`SUCCESS : ${res.data}`)
      })
      .catch(e => {
        alert('ERROR')
      })
    },
    findAll() {
      axios.get(`${this.context}`)
      .then(res => {
        alert(`SUCCESS : ${res.data}`)
      })
      .catch(e => {
        alert('ERROR')
      })
    },
    findById() {
      axios.get(`${this.context}/1`)
      .then(res => {
        alert(`SUCCESS : ${res.data}`)
      })
      .catch(e => {
        alert('ERROR')
      })
    },
    save() {
      axios.post(`${this.context}`)
      .then(res => {
        alert(`SUCCESS : ${res.data}`)
      })
      .catch(e => {
        alert('ERROR')
      })
    }
  }
}
</script>

<style scoped>

</style>