import { NgModule } from "@angular/core";
import { TodolistComponent } from "./app/components/todos/todolist/todolist.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TodoItemComponent } from './app/components/todos/todo-item/todo-item.component';
import { TodoFormComponent } from './app/components/todos/todo-form/todo-form.component';
import { HomeComponent } from './app/components/home/home.component';
import { HeaderComponent } from './app/components/header/header.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { PresentationComponent } from './app/components/presentation/presentation.component';
import { TodoDetailsComponent } from './app/components/todo-details/todo-details.component';

@NgModule({
    declarations: [AppComponent, TodolistComponent, TodoItemComponent, TodoFormComponent, HomeComponent, HeaderComponent, FooterComponent, PresentationComponent, TodoDetailsComponent],
    imports: [BrowserModule, FormsModule, RouterModule],
    bootstrap: [ AppComponent],
})
export class AppModule {}