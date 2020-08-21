import { Component, OnInit } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../services/profile.model';
import { trigger, transition, style, animate, animateChild, query, stagger } from '@angular/animations';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
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
export class ProfileComponent implements OnInit {
  faAngular = faAngular;
  faReact = faReact;
  profiles: Profile[];

  // testStr = " sandeep brahm  that is withing you !sasd asd";

  constructor(private service: ProfileService) { }

  private _selectedType = 'All';
  types: string[];

  ngOnInit(): void {
    this.loadProfile(this._selectedType);
  }

  get selectedType() {
    // console.log("selected type:" + this._selectedType);
    return this._selectedType;
  }

  set selectedType(newValue: string) {
    if (newValue !== this._selectedType) {
      this._selectedType = newValue;
      this.loadProfile(this._selectedType);
    }
  }

  loadProfile(_selectedType: string): void {
    this.service.get().subscribe(data => {
      this.types = data.map(p => p.type).filter((value, index, self) => {
        return self.indexOf(value) === index;
      })

      /**
       * Setting THe list of profiles - ie: Angular - react - vue - support
       * f nothing is selected every itteration of data.filter will be true as _selected = 'All' is assigned at the begining.
       */


      this.profiles = data.filter(p => {
        // console.log("p.type === _selectedType", p.type === _selectedType);
        // console.log("_selectedType === 'All'", _selectedType === 'All');
        return p.type === _selectedType || _selectedType === 'All'
      }
      );
    })



  }


}
