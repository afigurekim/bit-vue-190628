<template>
   <div>
   <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <div class="navbar-brand"><router-link to="/"><img alt="Home" src="../../assets/home.png"></router-link></div>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><router-link to="/">Home</router-link></li>
      <li><router-link to="/calculator">계산기</router-link></li>
      <li><router-link to="/memberlist">회원목록</router-link></li>
      <li><router-link to="/joinform">회원가입</router-link></li>
      <li><router-link to="/loginform">로그인</router-link></li>
    </ul>
  </div>
</nav>
   </div> 
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>