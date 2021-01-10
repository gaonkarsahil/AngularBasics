import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  // templateUrl: './classbinding.component.html',
  template: `
              <h2>
                Welcome {{ name }}
              </h2>
              
              <!--  Regular way using class attribute  -->
              <h2 class="text-success"> Are u free ? </h2>
              <!--  using class binding  -->
              <h2 [class]="successClass"> yes I am free. </h2>
              <!--  using both class attribute and class binding  -->
              <h2 class="text-special" [class]="successClass"> Using Both Regular and Class Binding, Both works </h2>

              <!--  conditionally apply single class using class binding  -->
              <h2 [class.text-danger]="hasError"> No I am busy. </h2>

              <!--  conditionally apply multiple classes using class binding and ngClass -->
              <h2 [ngClass]="messageClasses"> No I am busy. </h2>
  `,
  styles: [`
            .text-success {
                color: green;
            }
            .text-danger {
               color: red;
            }
            .text-special {
                font-style: italic;
            }
  `]
})
export class ClassbindingComponent implements OnInit {

  public name = "Sahil";
  public successClass = "text-success";
  public hasError = true;

  public isSpecial = true;
  public messageClasses = {
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.hasError
  }
  constructor() { }

  ngOnInit(): void {
  }

}
