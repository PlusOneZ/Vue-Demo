<template>
  <div class="py-6 flex justify-center sm:py-12">
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:px-12 sm:py-8">
      <div class="max-w-md mx-auto">
        <div class="divide-y divide-gray-200">
          <h2 class="py-3 text-2xl font-sans font-bold text-center">待办事项清单</h2>
          <table class="list-disc space-y-2 py-2 w-full">
            <tr class="h-1"
                v-for="o in coloredList"
                :key="coloredList.indexOf(o)"
            >

              <td align="left">
                <span class="h-6 flex items-center sm:h-7">
                  <svg
                      class="w-3" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path
                      d="M1024 127.937531v767.625183c0 70.665495-57.272035 127.937531-127.937531 127.93753h-767.625183c-70.665495 0-127.937531-57.272035-127.93753-127.93753v-767.625183c0-70.665495 57.272035-127.937531 127.93753-127.937531h767.625183c70.665495 0 127.937531 57.272035 127.937531 127.937531z"
                       data-spm-anchor-id="a313x.7781069.0.i0" class="selected"
                      :fill="o.color"
                  ></path></svg>
                  <span class="ml-2">
                    {{ o.content }}
                  </span>
                </span>
              </td>

              <td align="right">
                <p>
                  {{o.time}}
                </p>
              </td>

            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskListCard",
  props: {
    list: Array
  },
  data() {
    return {
      coloredList: []
    }
  },
  created() {
    for (let i = 0; i < this.list.length; i++) {
      let o = this.list[i]
      console.log(o.type)
      console.log(o.con)
      if (o.type ==='task') {
        this.coloredList.push({content: o.con, color: '#2775b6', time: o.time})
      } else if (o.type ==='course') {
        this.coloredList.push({content: o.con, color: '#fca106', time: o.time})
      } else if (o.type ==='due') {
        this.coloredList.push({content: o.con, color: '#de3f7c', time: o.time})
      } else if (o.type === 'personal') {
        this.coloredList.push({content: o.con, color: '#12a182', time: o.time})
      } else if (o.type === 'assigned') {
        this.coloredList.push({content: o.con, color: '#c27c88', time: o.time})
      } else {
        this.coloredList.push({content: o.con, color: '#ffffff', time: o.time})
      }
    }
  },
  computed: {

  }
}

</script>

<style scoped>

</style>