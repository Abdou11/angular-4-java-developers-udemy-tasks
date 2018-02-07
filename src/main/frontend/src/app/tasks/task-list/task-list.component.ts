import { Component, OnInit } from '@angular/core';
import { Task } from "app/tasks/task.model";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    tasks Task[] = [];

  constructor() { }

  ngOnInit() {
      this.tasks.push(new Task(1, "Task 1", true, "07/08/2018"));
      this.tasks.push(new Task(2, "Task 2", false, "07/08/2018"));
      this.tasks.push(new Task(3, "Task 3", false, "07/08/2018"));
  }

  getDueDateLabel(task:Task) {
      return task.completed ? 'label-success' : 'label-primary';
  }

  onTaskChange(event, task) {
      //this.taskService.saveTask(task,event.target.checked).subscribe();
      console.log("Task has Changed");
  }
}
