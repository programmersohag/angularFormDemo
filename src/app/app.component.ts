import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  /* An empty array that is responsible
       to add a division */
  items: string[] = [];

  /* A two-way binding performed which
     pushes text on division */
  newTask: string | undefined;


  public addToList(): void {
      if (this.newTask) {
        this.items.push(this.newTask);
        this.newTask = '';
    }
  }

  /* This function takes to input the
     task, that has to be deleted*/
  public deleteTask(index: number): void {
    this.items.splice(index, 1);
  }
}
