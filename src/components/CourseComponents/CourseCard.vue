<template>
  <div class="flex justify-center py-12 ">
    <div class="relative px-4 py-10 shadow-lg rounded-2xl sm:px-12 sm:py-8 bg-opacity-50"
         :style="'background-color:' + bgColor"
    >
      <div class="max-w-md mx-auto">
        <div class="divide-y divide-gray-200">
          <h2 class="py-3 text-2xl font-sans font-bold"> {{ courseName }} </h2>
          <ul class="list-disc space-y-2">
            <li class="flex items-start"
                v-for="i in taskContent"
                :key="taskContent.indexOf(i)"
            >
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                          :fill="i.timed ? '#ec4e8a': '#346c9c'"
                    />
                  </svg>
                </span>
              <p class="ml-2">
                {{ i.content }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseCard",
  props: {
    courseName: String,
    taskContent: Array
  },
  data() {
    return {
      bgColor: null
    }
  },
  created() {
    var colorList = [
      '#f0c9cf',
      '#c08eaf',
      '#8076a3',
      '#61649f',
      '#93b5cf',
      '#8abcd1',
      '#51c4d3',
      '#57c3c2',
      '#66c18c',
      '#e2e7bf',
      '#f7e8aa',
      '#f8b37f',
      '#f6cec1',
    ]
    colorList.sort(() => {return 0.5 -Math.random()})
    this.bgColor = colorList[0]
  }
}
</script>

<style scoped>

</style>