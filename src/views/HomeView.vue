<template>
  <div class="home">
    <EmployeeList />
  </div>
</template>

<script>
import EmployeeList from '@/components/EmployeeList.vue';

export default {
  name: "HomeView",
  components: { EmployeeList }
};
</script>
