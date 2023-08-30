import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
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
import { UsersComponent } from "./app/components/users/users.component";
import { TodosComponent } from "./app/components/todos/todos.component";

@NgModule({
    declarations: [
        AppComponent
        , TodosComponent
        , TodolistComponent
        , TodoItemComponent
        , TodoFormComponent
        , HomeComponent
        , HeaderComponent
        , FooterComponent
        , PresentationComponent
        , TodoDetailsComponent
        , UsersComponent
],
    imports: [BrowserModule, FormsModule, RouterModule, HttpClientModule],
    bootstrap: [ AppComponent],
})
export class AppModule {}