<template>
  <section class="min-h-screen">
    <form action="/course">
      <!--      <p class="text-xl text-white text-center my-2"> 登陆 </p>-->
      <div class="text-center justify-center align-middle content-center flex pr-10">
        <img src="../assets/img/happy.png" class="w-14 h-14 text-center content-center -mt5 justify-center" alt="Logo">
        <p class="py-4 pl-4 text-xl font-bold font-sans"> 同信 </p>
      </div>
      <input type="text" placeholder="用户名 / 邮箱">
      <input type="password" placeholder="密码">
      <button type="submit"
              class="h-12 bg-gradient-to-r from-blue-400 to-green-300 hover:from-green-200 hover:to-blue-300"> 登陆
      </button>
      <button type="button" class="my-2 h-8 border-2 border-indigo-400 hover:border-indigo-600"> 统一认证登陆</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>

body {
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(20deg, rgba(34, 162, 195, 1) 10.9%, rgba(255, 255, 255, 1) 87.1%);
  overflow: hidden;
}

section::before {
  position: absolute;
  content: "";
  z-index: 2;
  width: 450px;
  height: 450px;
  top: 50%;
  left: 50%;
  transform: translate(-100%, -80%);
  background-color: #f9d770;
  background-image: linear-gradient(147deg, #f9d770 0%, #f86b1d 74%);
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
  animation: pulse 1.5s infinite;
}

section::after {
  position: absolute;
  content: "";
  z-index: 2;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(10%, 20%);
  background-color: #f1908c;
  background-image: linear-gradient(45deg, #f1908c 0%, #1a94bc 52%, #5dbe8a 90%);
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2);
  animation: pulse 1.6s infinite;
}

@keyframes pulse {
  50% {
    box-shadow: 0 0 0 50px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

form {
  position: relative;
  z-index: 3;
  width: 320px;
  background-color: rgba(255, 255, 255, .1);
  padding: 45px 30px;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .1);
  border: 1px solid rgba(255, 255, 255, .2);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  backdrop-filter: blur(20px);
}

input {
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, .5);
  margin-bottom: 15px;
  padding-left: 15px;
  color: #fff;
  outline: none;
}

input::placeholder {
  color: #fff;
}

button {
  width: 100%;
  background-size: 200% auto;
  border-radius: 8px;
  color: #fff;
  outline: none;
  cursor: pointer;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .1);
  transition: ease .4s;
}

button:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>