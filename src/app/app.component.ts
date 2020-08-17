import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';




import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import { gsap, Power2, Elastic } from 'gsap/all';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bs4angmat';
  statusHome: boolean = true;
  statusProfile: boolean = false;

  statusContact: boolean = false;
  faCoffee = faFacebook;
  faIdCard = faLinkedin;
  faGraduationCap = faInstagram;
  public isMenuCollapsed = true;
  isCollapsed = true;

  ngOnInit(): void {
    gsap.timeline()
      .from("#main-avatar", { duration: .85, opacity: 0, scale: 0, y: 8 })
      .from("#g1458", { duration: .5, stagger: 0.1, ease: "back", opacity: 0, scale: 0, y: 2 })
      .from("#g1470", { duration: .5, stagger: 0.1, ease: "back", opacity: 0, scale: 0, y: 2 })
      .from("#g1489", { duration: .5, stagger: 0.1, ease: "back", opacity: 0, scale: 0, y: 2 })
      .from("#g1429", { duration: .5, stagger: 0.1, ease: "back", opacity: 0, scale: 0, y: 2 })
    // .from("#para1", { opacity: 0, y: () => Math.random() * 400 - 200, stagger: 0.1, duration: .8, ease: "back" })
    // .from("#para2", { opacity: 0, y: () => Math.random() * 400 - 200, stagger: 0.1, duration: .8, ease: "back" })
    // .from("#para3", { opacity: 0, y: () => Math.random() * 400 - 200, stagger: 0.1, duration: .8, ease: "back" })
    // .from("#para4", { opacity: 0, y: () => Math.random() * 400 - 200, stagger: 0.1, duration: .8, ease: "back" })


  }

  clickEventHome() {
    this.statusHome = true;
    this.statusProfile = false;
    this.statusContact = false;

    this.isCollapsed = true;
  }
  clickEventProfile() {
    this.statusProfile = true;
    this.statusHome = false;
    this.statusContact = false;
    this.isCollapsed = true;

  }
  clickEventContact() {
    this.statusContact = true;
    this.statusProfile = false;
    this.statusHome = false;
    this.isCollapsed = true;
  }
  clickEventProfileSVG(tech: string) {
    this.clickEventProfile();
    this.bounceTechs(tech);

  }

  bounceTechs(tech: string) {
    // tech = "#" + tech;
    console.log("tech ===" + tech);

    gsap.timeline()
      .from(tech, { duration: .5, ease: "bounce", opacity: 0, scale: 0 })
  }

}

