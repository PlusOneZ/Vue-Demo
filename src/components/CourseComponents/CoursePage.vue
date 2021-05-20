<template>
  <div>
    <Navigator class="backdrop-blur-lg z-50 ">
    </Navigator>

    <div class="flex">
      <div class="pl-10 py-6" style="z-index: -1">
        <div class="flex inline-flex gap-4">
        <div v-for="o in courseLists"
             :key="o.name"
             class="sm:pl-4"
        >
          <CourseCard
              :task-content="o.list"
              :course-name="o.name"
          >
          </CourseCard>
        </div>
      </div>
        <img src="../../assets/img/tableView.png" alt="table" style="width: 70%">
      </div>
      <div class="fixed right-20 top-6">
        <TaskListCard
          :list="taskList">
        </TaskListCard>
      </div>
    </div>

  </div>
</template>

<script>
import Navigator from "@/components/Navigator";
import CourseCard from "@/components/CourseComponents/CourseCard";
import TaskListCard from "@/components/CourseComponents/TaskListCard";

export default {
  name: "CoursePage",
  components: {TaskListCard, CourseCard, Navigator},
  data() {
    return {
      courseLists: [
        {
          name: "操作系统", list: [
            {timed: true, content: '15分钟后上课'},
            {timed: false, content: '明天提交作业'}
          ]
        },
        {
          name: "系统分析与设计", list: [
            {timed: true, content: '7-8节'},
            {timed: false, content: '3天后交作业'}
          ]
        },
        {
          name: "计算机系统结构", list: [
            {timed: false, content: '今天提交作业'}
          ]
        },
        {
          name: "艺术摄影", list: [
            {timed: false, content: '上课地点变动'}
          ]
        }
      ],
      taskList: [
        {con: '操作系统课', type: 'course', time: '15分钟后'},
        {con: '系统分析与设计课', type: 'course', time: '15:30'},
        {con: '操作系统作业', type: 'due', time: '今晚0:00'},
        {con: '数据库作业', type: 'due', time: '今晚0:00'},
        {con: '校庆晚会', type: 'assigned', time: '明天21:00'},
        {con: '班会', type: 'task', time: '后天13:30'},
        {con: '同学的婚礼', type: 'personal', time: '后天18:00'},
      ]
    }
  },
  methods: {}

}
</script>

<style scoped>

</style>