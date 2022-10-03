import { Component, OnInit } from '@angular/core';
import { faGear, faGamepad, faLineChart } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  faGear = faGear;
  faGamepad = faGamepad;
  faLineChart = faLineChart;
  constructor() { }

  ngOnInit(): void {
  }

}
