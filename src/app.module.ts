import { NgModule } from "@angular/core";
import { TodolistComponent } from "./app/component/todolist/todolist.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { FormsModule } from "@angular/forms";
import { TodoComponent } from './app/component/todo/todo.component';

@NgModule({
    declarations: [AppComponent, TodolistComponent, TodoComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [ AppComponent]
})
export class AppModule {}