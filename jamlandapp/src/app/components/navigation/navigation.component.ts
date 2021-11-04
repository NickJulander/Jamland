import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navigation } from '@mui/icons-material';
import { NavigationDetail } from 'src/app/shared/interfaces/navigation-detail';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() public navDetail:NavigationDetail = <NavigationDetail>{};

  constructor( private router: Router, ) {}

  ngOnInit(): void {
  }

  goToLibrary() {
    this.router.navigate([this.navDetail.route]);
  }

}
