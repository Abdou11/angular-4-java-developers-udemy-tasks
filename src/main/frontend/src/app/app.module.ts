import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskAddComponent } from './tasks/task-add/task-add.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import {TaskService} from "./tasks/task.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskAddComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
