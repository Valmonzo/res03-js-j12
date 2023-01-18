let App = {
    data() {
        return {
            animal: "Dog"
        }
    },
    methods: {

        changeAnimal() {
            if (this.animal === "Dog") {
                this.animal = "Cat";
            }
            else {
                this.animal = "Dog";
            }
        }
    }
}

export { App };
