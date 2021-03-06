import { Component, OnInit, HostBinding, ElementRef } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';





import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import { gsap, Power2, Elastic } from 'gsap/all';
import { EventEmitter } from 'protractor';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

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
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faHome = faHome;
  public isMenuCollapsed = true;
  isCollapsed = true;
  public href: string = "";
  public isDark = false;
  // readonly darkModeToggle = new EventEmitter <boolean>();



  constructor(private elRef: ElementRef, private router: Router, private titleService: Title) {
    titleService.setTitle("sbrahma");
  }

  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'theme-dark' : 'theme-light';
  }


  ngOnInit(): void {
    // ?need to understand//
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("onInit():: " + event.urlAfterRedirects);
        this.routerChangeMethod(event.urlAfterRedirects);
      }
    })

    try {
      gsap.timeline()
        // .from("#main-avatar", { duration: .85, opacity: 0, scale: 0, y: 8 })

        .from("#g1447", { duration: .5, stagger: 0.1, ease: "back", opacity: 0, scale: 0, y: 2 })
        .from("#g1458", { duration: .5, stagger: 0.1, ease: "back", opacity: 0, scale: 0, y: 2 })
        .from("#g2702", { duration: .5, stagger: 0.1, ease: "back", opacity: 0, scale: 0, y: 2 })
        .from("#g1470", { duration: .5, stagger: 0.1, ease: "back", opacity: 0, scale: 0, y: 2 })
        .from("#g1489", { duration: .5, stagger: 0.1, ease: "back", opacity: 0, scale: 0, y: 2 })
        .from("#g1429", { duration: .5, stagger: 0.1, ease: "back", opacity: 0, scale: 0, y: 2 })

    } catch (error) {
      console.log(error);
    }

    // .from("#para1", { opacity: 0, y: () => Math.random() * 400 - 200, stagger: 0.1, duration: .8, ease: "back" })
    // .from("#para2", { opacity: 0, y: () => Math.random() * 400 - 200, stagger: 0.1, duration: .8, ease: "back" })
    // .from("#para3", { opacity: 0, y: () => Math.random() * 400 - 200, stagger: 0.1, duration: .8, ease: "back" })
    // .from("#para4", { opacity: 0, y: () => Math.random() * 400 - 200, stagger: 0.1, duration: .8, ease: "back" })


  }
  routerChangeMethod(url) {
    console.log("URL" + url)
    switch (url) {
      case "/": {
        console.log("in /");
        this.clickEventHome();
        break;
      }
      case "/portfolios": {
        console.log("in /profile");
        this.clickEventProfile();
        break;
      }
      case "/contacts": {
        console.log("in /contact");
        this.clickEventContact();
        break;
      }
      default: {
        console.log("defaulting");
        break;
      }
    }
  }



  // onDarkModeToggle({checked}: MatSlideToggleChange) {
  //   this.darkModeToggle.emit(checked);
  // }

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

  // ngAfterViewInit() {
  //   let loader = this.elRef.nativeElement.querySelector('#loader');
  //   loader.style.display = "none"; //hide loader
  // }

}