import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  // templateUrl: './stylebinding.component.html',
  template: `
              <h2>
                Welcome {{ name }}
              </h2>

              <!--  inline style using styles attribute -->
              <h2 style = "color:violet"> Not Style Binding 1 </h2>

              <!--  using style binding -->
              <h2 [style.color] = "'orange'"> Style Binding 1 </h2>

              <!--  using conditional style binding -->
              <h2 [style.color] = " hasError ? 'red' : 'green' "> Style Binding 2</h2>

              <!--  using conditional style binding with property -->
              <h2 [style.color] = "highlightColor"> Style Binding 3</h2>

              <!--  multiple styles using style binding with property and ngStyle -->
              <h2 [ngStyle] = "titleStyles"> Style Binding 4</h2>

              
  `,
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  public name = "Sahil";
  public hasError = true;
  public highlightColor = "orange";

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
