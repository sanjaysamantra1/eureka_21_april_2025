import { Component, ViewEncapsulation } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { ProductsComponent } from '../products/products.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { Demo1Component } from '../demo1/demo1.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ParentComponent } from '../parent/parent.component';
import { TrafficLightComponent } from '../traffic-light/traffic-light.component';
import { Demo2Component } from '../demo2/demo2.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { HttpDemo2Component } from '../http-demo2/http-demo2.component';
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from '../observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from '../observable-demo3/observable-demo3.component';
import { Message1Component } from '../message1/message1.component';
import { Message2Component } from '../message2/message2.component';
import { MessageAddComponent } from '../message-add/message-add.component';
import { SubjectDemo1Component } from '../subject-demo1/subject-demo1.component';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingComponent,
    // DirectivesComponent
    // ProductsComponent
    // MyModalComponent
    // Demo1Component,
    // Demo2Component
    // PipesComponent
    // TrafficLightComponent,
    // ParentComponent
    // Math1Component,
    // Math2Component
    // HttpDemo1Component
    // HttpDemo2Component
    // ObservableDemo1Component,
    // ObservableDemo2Component,
    // ObservableDemo3Component
    // Message1Component,
    // Message2Component,
    // MessageAddComponent
    SubjectDemo1Component
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  flag:boolean = true;
}
