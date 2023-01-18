let App = {
    data() {
        return {
            tasks: [

            ]
        }
    },
    methods: {
        addTask(event) {
            let taskObj = {
                text : "",
                done : false
            };
            taskObj.text = event.target.elements.task.value;
            this.tasks.push(taskObj);
            event.target.elements.task.value = "";
        },

        /*removeTask(event) {
            taskElem = document.getElementById("taskElem")
            taskElem.classList.toggle("done");

        },*/
        doneTask(task) {
            /*if(this.done === false) {
            this.done = true;
            }
            else {
                this.done = false;
            }*/

            if(task.done === false)
            {
               task.done = true;
            }
            else
            {
                task.done = false;
            }
        }
    }
}

export { App };
