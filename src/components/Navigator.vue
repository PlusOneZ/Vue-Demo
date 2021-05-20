<template>
  <nav class="backdrop-blur-lg">
    <div class="bg-blue-200 bg-opacity-20 w-full h-10 border-b shadow-sm fixed"
         style="-webkit-backdrop-filter:saturate(150%) blur(8px); backdrop-filter:saturate(150%) contrast(50%) blur(8px);"
    >
      <div class="my-1 mx-1">
        <div class="float-left">
          <img alt="logo" src="https://i.loli.net/2021/05/18/Emr2jeatvbwOdAZ.png" class="w-8">
        </div>
        <ul class="float-left text-base font-bold text-center my-1 mx-3">
          <li class="active nav-item"><a> School </a></li>
          <li class="nav-item"><a> Course </a></li>
          <li class="nav-item"><a> Todo </a></li>
          <li class="nav-item"><a> Square </a></li>
        </ul>
        <ul class="float-right text-base font-bold text-center my-1 mx-3">
          <li class="nav-item"><a> Notifications<span class="text-red-400">(10)</span> </a></li>
          <li class="inline-block h-5">
            <a>
              <img alt="avatar" src="https://i.loli.net/2021/05/18/vWptQgAlsTqdxrK.png"
                   class="w-7 h-7 ml-3 rounded-full">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigator"
}
</script>

<style scoped>
.nav-item {
  display: inline-block;
  margin-left: 1.5rem /* 24px */;
}

li.active {
  @apply text-blue-700
}
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>