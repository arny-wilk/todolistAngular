import { NgModule } from "@angular/core";
import { TodolistComponent } from "./app/component/todolist/todolist.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent, TodolistComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [ AppComponent]
})
export class AppModule {}