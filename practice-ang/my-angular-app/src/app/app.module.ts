import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
    imports: [
        BrowserModule,
        TodoComponent
    ],
    declarations: [AppComponent, TodoComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}