<template>
    <form @submit.prevent class="w-50 mx-auto">
        <Input type="text" v-model="employee.name" placeholder="Name" />
        <Input type="text" v-model="employee.surname" placeholder="Surname" />
        <Input type="number" v-model="employee.experience" placeholder="Experience" />
        <Input type="number" v-model="employee.age" placeholder="Age" />
        <Input type="text" v-model="employee.address" placeholder="Address" />
        <button @click="updateEmployeeOrAddEmployee" style="text-transform: capitalize;width: 100%;"
            class="btn btn-primary">{{ action }}</button>
    </form>
</template>
<script>
import { mapState } from "vuex"
export default {
    data() {
        return {
            employee: {
                name: '',
                surname: '',
                experience: '',
                age: '',
                address: '',
            }
        }
    },
    props: {
        action: {
            type: String,
            required: true
        },
    },
    computed: {
        ...mapState({
            employeeData: state => state.employee.employee,
            employees: state => state.employee.employees
        })
    },
    mounted() {
        const id = Number(this.$route.params.id)
        if (this.action === "update" && id) {
            const data = this.employees.find((item) => item.id === id)
            this.$store.commit("setEmployee", data)
        }
        if (this.employeeData && this.action === "update") {
            this.employee = this.employeeData
        }
        if (this.action === "add") {
            this.employee = {
                name: '',
                surname: '',
                experience: '',
                age: '',
                address: '',
            }
        }
    },
    methods: {
        updateEmployeeOrAddEmployee() {
            if (this.action === "update") {
                const id = Number(this.$route.params.id)
                const data2 = { ...this.employee, id }
                this.$store.dispatch('updateEmployee', data2)
                this.$router.push('/')
                return
            }

            if (!Object.values(this.employee).every((item) => item)) {
                return
            }

            const data = {
                ...this.employee,
                id: Date.now()
            }
            const newEmployeeList = [...this.employees, data]
            this.$store.commit("setEmployees", newEmployeeList)
            this.$router.push("/")
        }
    },
}
</script>
<style></style>