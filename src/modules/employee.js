const state = {
    employees: [
        {
            id: 1,
            name: "John",
            surname: "Doe",
            experience: 5,
            age: 30,
            address: "123 Main Street"
        },
        {
            id: 2,
            name: "Jane",
            surname: "Smith",
            experience: 8,
            age: 35,
            address: "456 Elm Street"
        },
        {
            id: 3,
            name: "Michael",
            surname: "Johnson",
            experience: 3,
            age: 28,
            address: "789 Oak Avenue"
        },
        {
            id: 4,
            name: "Emily",
            surname: "Davis",
            experience: 6,
            age: 32,
            address: "987 Pine Road"
        },
        {
            id: 5,
            name: "David",
            surname: "Wilson",
            experience: 10,
            age: 40,
            address: "321 Cedar Lane"
        },
        {
            id: 6,
            name: "Sarah",
            surname: "Anderson",
            experience: 4,
            age: 27,
            address: "654 Maple Drive"
        },
        {
            id: 7,
            name: "Ryan",
            surname: "Brown",
            experience: 2,
            age: 25,
            address: "876 Walnut Court"
        },
        {
            id: 8,
            name: "Jessica",
            surname: "Taylor",
            experience: 7,
            age: 33,
            address: "543 Birch Avenue"
        },
        {
            id: 9,
            name: "Daniel",
            surname: "Miller",
            experience: 9,
            age: 38,
            address: "210 Hickory Lane"
        },
        {
            id: 10,
            name: "Olivia",
            surname: "Harris",
            experience: 1,
            age: 24,
            address: "135 Spruce Street"
        }
    ],
    employee: null
}

const mutations = {
    setEmployee(state, payload) {
        state.employee = payload
    },
    setEmployees(state, payload) {
        state.employees = payload
    }
}



export default {
    state,
    mutations
}