import{validateTitle,validatePriority,validateDueDate} from './validator.js'
 const tasks = [];
                    
                    // 1. Add new task
                    // Validate using imported functions
                    // If valid, add to tasks array
                    // Return success/error message
                     
                    function addTask(title, priority, dueDate) {
                        if(!validateTitle() &&validatePriority()&&validateDueDate){
                            return "invalid task"
                        }
                        tasks.push(title,priority,dueDate)
                            return "task added successfully"
                        }
                        

                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                      console.log(tasks)
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                        if(tasks[taskId])
                            tasks.splice(taskId-1,1)
                        return "task completed"
                      // Find task and mark as complete
                
                    }
export{addTask,getAllTasks,completeTask}

