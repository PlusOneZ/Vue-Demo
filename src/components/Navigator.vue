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
          <li class="nav-item" :class="{active: activate === 'school'}"> <a href="/school"> School </a> </li>
          <li class="nav-item" :class="{active: activate === 'course'}"> <a href="/course"> Course </a> </li>
          <li class="nav-item" :class="{active: activate === 'todo'}"> <a href="/todo"> Todo </a> </li>
          <li class="nav-item" :class="{active: activate === 'square'}"> <a href="/square"> Square </a> </li>
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
  name: "Navigator",
  props: {
    activate: String
  }
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

li a:hover {
  @apply text-blue-400;
  cursor: pointer;
}

@tailwind base;
@tailwind components;
@tailwind utilities;
</style>