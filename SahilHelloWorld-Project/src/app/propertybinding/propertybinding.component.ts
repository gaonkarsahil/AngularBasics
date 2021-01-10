import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  // templateUrl: './propertybinding.component.html',
  template: `
              <h2>
                Welcome {{ name }}
              </h2>

        <!--  <input type="text" value="Sahil"> -->

        <!--  Property Binding  -->
        <!--  <input [id]="myId" type="text" value="SahilPropertyBinding"> -->

        <!--  Interpolation  -->
        <!--  <input id="{{ myId }}" type="text" value="SahilInterpolation">  -->

              <input disabled="false" id="{{ myId }}" type="text" value="SahilInterpolation">
              <input [disabled]="false" id="{{ myId }}" type="text" value="SahilPBdisabledFalse">
              <input [disabled]="isDisabled" id="{{ myId }}" type="text" value="SahilPBdisabledTrue">
              <input bind-disabled="isDisabled" id="{{ myId }}" type="text" value="SahilPBdisabledTrue">

  `,
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  public name = "sahil";
  public myId = "testingId";
  public isDisabled = true;
  constructor() { }

  ngOnInit(): void {
  }

}
