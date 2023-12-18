const Users = {
    data() {
        return {
            user_1: {
                name: "Ambrósio",
                age: 28,
            }
        }
    }
}

Vue.createApp(Users).mount("#app");