import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-list',
  imports: [],
  templateUrl: './tab-list.html',
  styleUrl: './tab-list.scss'
})
export class TabList {

  constructor(private router: Router) {}

  activeTab = 'dashboard'; // or 'people', 'settings', etc.

  openActiveFeature(name: string) {
    this.activeTab = name;
    this.router.navigateByUrl(`/${name.toLowerCase()}`);
  }
}
