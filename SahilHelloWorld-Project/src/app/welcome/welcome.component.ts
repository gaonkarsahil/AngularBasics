import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-welcome]',
  // templateUrl: './welcome.component.html',
  template: `<div>
                Inline Template Works
            </div>`,
  // styleUrls: ['./welcome.component.css']
  styles: [`
            div{
              color:red;
            }
          `]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
