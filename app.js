import inquirer from "inquirer";
let todos = [];
let condition = true;
//loop while
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todos",
            type: "input",
            message: "what you want to add in your todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "true"
        }
    ]);
    todos.push(addTask.todos);
    console.log(todos);
    condition = addTask.addMore;
}
;
