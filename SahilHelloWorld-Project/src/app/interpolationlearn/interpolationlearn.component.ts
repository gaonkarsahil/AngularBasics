import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolationlearn',
  // templateUrl: './interpolationlearn.component.html',
/* Static Name Display  
  template: `
              <h2>
                Welcome SahilStatic
              </h2>
  `,
*/
  template: `
              <h2>
                Welcome {{ name }}
              </h2>
              <h2> {{ 2 + 3 }} </h2>
              <h2> {{"welcome "+ name }} </h2>
              <h2> {{ name.length }} </h2>
              <h2> {{ name.toUpperCase() }} </h2>
              <h2> {{ greetUser() }} </h2>

              <h2> {{ siteUrl }} </h2>


            <!--  <h2> {{ a = 2 + 4 }} </h2> -->

            <!--  <h2> {{window.location.href}} </h2> -->
  `,

  styleUrls: ['./interpolationlearn.component.css']
})
export class InterpolationlearnComponent implements OnInit {

  public name= "sahilDynamic";
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "hello " + this.name;
  }

}
