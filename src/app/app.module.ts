import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Imports for the main components
 */
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopNavComponent } from './ui/top-nav/top-nav.component';

import { TasksComponent } from './components/tasks/tasks.component';
import { CurrentTaskComponent } from './components/current-task/current-task.component';

import { TaskSearchComponent } from './components/task-search/task-search.component';


/**
 * Admin components
 */
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { MessagesComponent } from './admin/messages/messages.component';
import { AddTaskComponent } from './admin/add-task/add-task.component';
import { EditTaskComponent } from './admin/edit-task/edit-task.component';
import { LoginComponent } from './admin/login/login.component';

import { SelectUserComponent } from './components/select-user/select-user.component';


/**
 * Imports for angular modules
 */
import { FormsModule } from '@angular/forms';


/**
 * Imports for data services
 */
import { InMemoryDataService } from './services/in-memory-data.service';

import { TaskService } from './services/task.service';
import { MessageService } from './services/message.service';
import { EmployeeService } from './services/employee.service';
import { StatusService } from './admin/login/status.service';


import { AppRoutingModule } from './/app-routing.module';

/**
 * Material design modules and components
 **/
import { MatStepperModule} from '@angular/material/stepper';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/**
 * Data routing
 */
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';



/**
 * Initialize the modules and application
 * @author Thijs Zijdel -  configured the application for the start
 */
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CurrentTaskComponent,
    MessagesComponent,
    TopNavComponent,
    DashboardComponent,
    TaskSearchComponent,
    AddTaskComponent,
    EditTaskComponent,
    LoginComponent,
    SelectUserComponent,
    AdminDashboardComponent,
    AdminSidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    MatStepperModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [
    TaskService,
    MessageService,
    EmployeeService,
    StatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
