import { Component, OnInit, Input, ViewChild, ViewEncapsulation, AfterContentChecked,ElementRef, } from '@angular/core';

@Component({
  selector: 'app-sidenav-bar',
  templateUrl: './sidenav-bar.component.html',
  styleUrls: ['./sidenav-bar.component.css'],
})
export class SidenavBarComponent implements OnInit {
  @Input() isExpanded: boolean = false;
  isShowing = false;
  constructor() {

  }
  
  ngOnInit(): void {
   
  }
   



}
