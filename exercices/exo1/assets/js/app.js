 let App = {
    data() {
        return {
            number : 0
        }
    },
    methods : {
        addOne()
        {
	        this.number = this.number + 1;
        },
        removeOne()
        {
            this.number = this.number - 1;
        }
    }
}

export { App };