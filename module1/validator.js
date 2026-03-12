// TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {  
                        if(!title){
                            return "required title"
                        }
                if(length >= 3) {
                    return "min 3 char required"
                }
                return true
                }
            //           // 2. Validate priority (must be: low, medium, high)
                     function validatePriority(priority) {
                      
                    if(priority==low || priority==medium ||priority==high){
                        return true
                    }

               }
                      
               // 3. Validate due date (must be future date)
               function validateDueDate(date) {
                return true
               }
export{validateTitle,validatePriority,validateDueDate}
                   
                