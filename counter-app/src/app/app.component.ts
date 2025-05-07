import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'counter-app';
  count = 0;
  handleCounter(val: string) {
    if (val == 'minus') {
      this.count = this.count > 0 ? this.count - 1 : this.count;
      // if (this.count > 0) {
      //   this.count = this.count - 1;
      // }
    } else if (val == 'plus') {
      this.count = this.count >= 0 ? this.count + 1 : this.count;
    } else {
      this.count = 0;
    }
  }

  handleEvent(event: MouseEvent) {
    console.log('Function Called', event.type);
    console.log('Function Called', event.target);
    console.log('Function Called', (event.target as Element).className);
  }
  handleInputEvent(event: Event) {
    console.log('Function Called', event.type);
    console.log('Function Called', event.target);
    console.log('Function Called', (event.target as HTMLInputElement).value);
  }

  userName = '';
  displayName = '';
  email = '';
  getValue(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
    console.log(this.userName);
  }
  showName() {
    this.displayName = this.userName;
  }
  setValue() {
    this.userName = 'Default Value';
  }

  getEmail(val: string) {
    this.email = val;
  }
  setEmail() {
    this.email = 'test@gmail.com';
  }
}
