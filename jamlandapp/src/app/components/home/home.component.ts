import { Component, OnInit } from '@angular/core';
import { Navigation } from '@mui/icons-material';
import { NavigationDetail } from 'src/app/shared/interfaces/navigation-detail';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public navigationComponents: NavigationDetail[];
  constructor() {
    this.navigationComponents = [
      {
        title: 'Library'
        ,description: 'Every chord, scale, chord and scale, scale and chord, and chord and scale and chord. Everythig. Ever.'
        ,route: 'library'
        ,icon: 'Jam off in peace.'
      },
      {
        title: 'My Jam'
        ,description: 'Find saved scales, chords, chords and sacles and scales and chords right here.'
        ,route: 'myJam'
        ,icon: 'Wow super vibey stash alert.'
      }
    ];
  }
  ngOnInit(): void {}
}
