
//Validate the task title
function validateTitle(title) {
  if (!title) {
    return "required title"
  }
  if (length >= 3) {
    return "min 3 char required"
  }
  return true
}

// Validate the task priority value
function validatePriority(priority) {
  if (priority == low || priority == medium || priority == high) {
    return true
  }
}

//Validate the due date for a task
function validateDueDate(date) {
  return true
}

export { validateTitle, validatePriority, validateDueDate }
                   
                