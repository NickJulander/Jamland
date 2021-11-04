import { Component, OnInit } from '@angular/core';
import { NavigationDetail } from 'src/app/shared/interfaces/navigation-detail';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  
  public navigationComponents: NavigationDetail[];

  constructor() {
    this.navigationComponents = [
      {
        title: 'Scales'
        ,description: 'See all of the scales'
        ,route: 'scaleLibrary'
        ,icon: 'Let\'s scale away.'
      },
      {
        title: 'Chords'
        ,description: 'See all of the chords.'
        ,route: 'chordLibrary'
        ,icon: 'Dirty, dirty chords.'
      }
    ];
  }

  ngOnInit(): void {
  }

}
