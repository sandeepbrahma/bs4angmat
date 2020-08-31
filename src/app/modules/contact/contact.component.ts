import { Component, OnInit, TemplateRef, Input, QueryList } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, style, animate, animateChild, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('list', [
      transition(':enter', [
        query('@items', stagger(60, animateChild()))
      ])
    ]),
    //transition('void => *', [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('.7s cubic-bezier(.8,-0.6,0.2,1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})

export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.ngOnInit();
  }

}
