import { Component, OnInit } from '@angular/core';
import { faTwitter, faInstagram, faFacebook, faGithub, faLinkedin, faGit } from '@fortawesome/free-brands-svg-icons';
import { faF } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  constructor() { }

  ngOnInit(): void {
  }

}
