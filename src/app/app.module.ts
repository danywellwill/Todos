import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component'; 
import { FormsModule } from '@angular/forms'; 

const routes: Routes = [
  { path: ':status', component: TodoComponent }, 
  { path: '**', redirectTo: '/all' }
]; 

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent 
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
