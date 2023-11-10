<template>
    <form @submit.prevent
        style="display: flex; flex-direction: column; justify-content: center; align-items: center ; text-align: center; gap: 20px;">
        <Input type="text" v-model="employee.name" placeholder="Name" />
        <Input type="text" v-model="employee.surname" placeholder="Surname" />
        <Input type="number" v-model="employee.experience" placeholder="Experience" />
        <Input type="number" v-model="employee.age" placeholder="Age" />
        <Input type="text" v-model="employee.address" placeholder="Address" />
        <button @click="updateEmployeeOrAddEmployee" style="text-transform: capitalize;">{{ action }}</button>
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
        if (this.employeeData) {
            console.log(this.employeeData);
            this.employee = this.employeeData
        }
    },
    methods: {
        updateEmployeeOrAddEmployee() {
            if (this.action === "update") {
                const newData = this.employees.map((item) => {
                    if (item.id === Number(this.$route.params.id)) {
                        return {
                            ...this.employee,
                            id: item.id
                        }
                    }
                    return item
                })

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
    }
}
</script>
<style></style>