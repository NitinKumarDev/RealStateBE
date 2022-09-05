import { Component } from '@angular/core';
import { FooterComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-footer',
  templateUrl: './default-footer.component.html',
  styleUrls: ['./default-footer.component.scss'],
})
export class DefaultFooterComponent extends FooterComponent {
  getYear:any;
  getDate:any;
  constructor() {
    super();
    this.getDate= new Date();
    this.getYear = this.getDate.getFullYear()
    
  }
  
}
