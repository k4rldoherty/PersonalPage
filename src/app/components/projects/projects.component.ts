import { Component, OnInit } from '@angular/core'; 
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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

  // temporary implementation
  artistConnect: boolean = true;

  projectsList : any = [
    {
      title: "ArtistConnect",
      imgSrc: "W.I.P",
      description: "A social media application I am currently developing as part of my final year of college (more photos to come)."
    },
    {
      title: "PremNews",
      imgSrc: "W.I.P",
      description: "An android application I developed to scrape news stories regarding the Premier League and display all links in one application. Users can create accounts and set favourite teams as well as filter stories by date, keyword and team."
    },
  ]
  constructor() { }
  ngOnInit(): void {
    this.leftArrowDisabled = true;
    this.rightArrowDisabled = false;
  }

  changeProject(direction: number) {
    this.projectIndex = this.projectIndex+=direction;
    this.isArrowEnabled();
    this.artistConnect = !this.artistConnect
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
