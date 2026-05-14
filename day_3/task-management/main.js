// entry point for task management examples
import { addTask, getAllTasks, completeTask } from './task.js'

// Add a new task and log the response
let x = addTask("eating", 'high', '24-12-27')
console.log(x)

// Retrieve all task entries and print them
const tasks = getAllTasks()
console.log(tasks)
