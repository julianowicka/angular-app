import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="main-content">
      <h1>
        Welcome to {{title}}!
      </h1>
        <app-welcome></app-welcome>
    </div>
  `,
  styles: [`
  .main-content{
      padding: 20px;
      font-family: sans-serif;
  }
  `]
})
export class AppComponent {
  title = 'Portfolio';
}
