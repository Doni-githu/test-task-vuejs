<template>
    <div class="w-50 mx-auto">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Experience</th>
                    <th scope="col">Age</th>
                    <th scope="col">Address</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(employee, index) in employees" :key="employee.id">
                    <td scope="row">{{ index+1 }}</td>
                    <td>{{ employee.name }}</td>
                    <td>{{ employee.surname }}</td>
                    <td>{{ employee.experience }}</td>
                    <td>{{ employee.age }}</td>
                    <td>{{ employee.address }}</td>
                    <td>
                        <button class="btn btn-success" @click="() => handleUpdate(employee.id)">U</button>
                        <button class="btn btn-danger" style="margin-left: 10px;"
                            @click="() => deleteEmployee(employee.id)">D</button>
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
<style>

td,
th {
    text-align: left;
}
</style>