<template>
<div>
  <Nav></Nav>
  <form>
    <div class="form-group">
      <label for="inputid">아이디:</label>
      <input type="text" class="form-control" id="inputid" v-model="customerId" placeholder="아이디를 입력해주세요">
    </div>
    <div class="form-group">
      <label for="inputpw">패스워드:</label>
      <input type="password" class="form-control" id="inputpw" v-model="password" placeholder="패스워드를 입력해주세요">
    </div>
    <div class="checkbox">
      <label><input type="checkbox"> Remember me</label>
    </div>
    <button class="btn btn-default" @click="count">count</button>
    <button class="btn btn-default" @click="deleteById">deleteById</button>
    <button class="btn btn-default" @click="existsById">existsById</button>
    <button class="btn btn-default" @click="findAll">findAll</button>
    <button class="btn btn-default" @click="findById">findById</button>
    <button class="btn btn-default" @click="save">save</button>
    <button class="btn btn-default" @click="login">login</button>
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
      context: 'http://localhost:9000/customers',
      customerId: 'hong',
      customerName: '홍길동',
      password: '1234',
      ssn: '123456-1234567',
      phone: '010-9999-9999',
      city: '서울 중구',
      address: '종로 69 YMCA',
      postalcode: '00001',
      photo: 'hong1.jpg'
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
        alert(`SUCCESS : ${res.data[0].customerName}`)
      })
      .catch(e => {
        alert('ERROR')
      })
    },
    findById() {
      axios.get(`${this.context}/1`)
      .then(res => {
        alert(`SUCCESS : ${res.data.customerName}`)
      })
      .catch(e => {
        alert('ERROR')
      })
    },
    save() {
      let data = {
        customerId: this.customerId,
        customerName: this.customerName,
        password: this.password,
        ssn: this.ssn,
        phone: this.phone,
        city: this.city,
        address: this.address,
        postalcode: this.postalcode,
        photo: this.photo
      }
      let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege..'
      }
      axios.post(`${this.context}`, 
                    JSON.stringify(data),
                    { headers: headers })
      .then(res => {
        alert(`SUCCESS : ${res.data}`)
      })
      .catch(e => {
        alert('ERROR')
      })
    },
    login() {
      let data = {
        customerId: this.customerId,
        password: this.password
      }
      let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege..'
      }
      alert(`${this.customerId} : ${this.password}`)
      axios.post(`${this.context}/login`, 
                  JSON.stringify(data),
                  { headers: headers })
      .then(res => {
        alert(`SUCCESS : ${res.data.customerName}`)
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