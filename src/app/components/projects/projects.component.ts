import { Component, OnInit } from '@angular/core'; 
import { faChevronLeft, faChevronRight, faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  projectIndex: number = 0;
  leftArrowDisabled!: boolean;
  rightArrowDisabled!: boolean;

  projectsList : any = [
    {
      title: "PremNews",
      imgSrc: "exampleSrc",
      description: "ExampleDescription"
    },
    {
      title: "Project 2",
      imgSrc: "exampleSrc2",
      description: "ExampleDescription2"
    }
  ]
  constructor() { }
  ngOnInit(): void {
    this.leftArrowDisabled = true;
    this.rightArrowDisabled = false;
  }

  changeProject(direction: number) {
    this.projectIndex = this.projectIndex+=direction;
    this.isArrowEnabled();
  }

  isArrowEnabled() {
    if (this.projectIndex == 0) {
      this.leftArrowDisabled = true;
    } else {
      this.leftArrowDisabled = false;
    }
    if (this.projectIndex == this.projectsList.length - 1) {
      this.rightArrowDisabled = true;
    } else {
      this.rightArrowDisabled = false;
    }
  }
}
