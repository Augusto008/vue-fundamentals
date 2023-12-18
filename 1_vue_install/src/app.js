const Users = {
    data() {
        return {
            input: {
                name: ""
            },
            user_1: {
                name: "Ambrósio",
                age: 28,
            },
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            console.log(this.input.name);
            this.user_1.name = this.input.name;
        }
    }
}

Vue.createApp(Users).mount("#app");