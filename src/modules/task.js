export default class Task {
    constructor(title, dueDate, priority, description=''){
        this.title = title,
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    
    getName() {
        return this.name
    }
    
    
    getDate() {
        return this.dueDate
    }

}