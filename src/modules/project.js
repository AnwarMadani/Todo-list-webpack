import { toDate, isToday, isThisWeek, subDays } from 'date-fns'

export default class Project{
    constructor(name){
        this.name = name,
        this.tasks = []
    }

    getName(){
        return this.name
    }

    getTasks(){
        return this.tasks
    }

    getTask(taskName){
        return this.tasks.find((task) => task.getName() === taskName)
    }

    contains(taskName){
        return this.tasks.some((task) => task.getName() === taskName)
    }

    addTask(newTask){
        if(this.tasks.find((task) => task.getName() === newTask.name)) return
        this.tasks.push(newTask)
    }

    deleteTask(taskName){
        this.tasks = tasks.filter((task) => task.getName() !== taskName)
    }

    
}