import { validateTitle, validatePriority, validateDueDate } from './validator.js'

const tasks = []

// Add a new task with validation checks
function addTask(title, priority, dueDate) {
  // Call imported validation functions before adding the task
  if (!validateTitle() && validatePriority() && validateDueDate) {
    return "invalid task"
  }

  tasks.push(title, priority, dueDate)
  return "task added successfully"
}

// Get all tasks and log the current task list
function getAllTasks() {
  console.log(tasks)
}

// Mark a task as complete by removing it from the list
function completeTask(taskId) {
  if (tasks[taskId])
    tasks.splice(taskId - 1, 1)

  return "task completed"
}

export { addTask, getAllTasks, completeTask }

