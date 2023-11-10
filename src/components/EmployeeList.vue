<template>
    <div style="display: flex; justify-content: center; align-items: center;">
        <table style="width: 100%;">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Experience</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                    <td>{{ employee.name }}</td>
                    <td>{{ employee.surname }}</td>
                    <td>{{ employee.experience }}</td>
                    <td>{{ employee.age }}</td>
                    <td>{{ employee.address }}</td>
                    <td>
                        <button class="btn btn-success" @click="() => handleUpdate(employee.id)">U</button>
                        <button class="btn btn-danger" style="margin-left: 10px;" @click="() => deleteEmployee(employee.id)">D</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState({
            employees: state => state.employee.employees
        })
    },
    methods: {
        handleUpdate(id) {
            const employee = this.employees.find((employee) => employee.id === id)
            this.$store.commit("setEmployee", employee)
            this.$router.push(`/update/${id}`)
        },
        deleteEmployee(id) {
            const data = this.employees.filter((item) => item.id !== id)
            this.$store.commit("setEmployees", data)
        }
    }
}
</script>
<style></style>