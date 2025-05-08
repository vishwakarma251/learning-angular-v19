import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  display = true;
  hide() {
    this.display = false;
  }
  show() {
    this.display = true;
  }
  toggleFunction() {
    this.display = !this.display;
  }

  // Else If flow
  color = 1;
  handleColor(val: number) {
    this.color = val;
  }
  handleInput(event: Event) {
    this.color = parseInt((event.target as HTMLInputElement).value);
  }

  // Switch statements
  switchColor = 'green';
  handleSwitchColor(val: string) {
    this.switchColor = val;
  }
  handleSwitchInputColor(event: Event) {
    this.switchColor = (event.target as HTMLInputElement).value;
  }

  // @For Loop in Template
  users = ['Peter', 'Bruce', 'John', 'Sam'];
  students = [
    { name: 'Peter', age: 34, email: 'peter@test.com' },
    { name: 'Bruce', age: 43, email: 'bruce@test.com' },
    { name: 'John', age: 32, email: 'john@test.com' },
    { name: 'Sam', age: 23, email: 'sam@test.com' },
  ];
}
