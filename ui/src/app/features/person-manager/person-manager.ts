import { Component } from '@angular/core';
import { PeopleService } from '../../core/services/people.service';

@Component({
  selector: 'app-person-manager',
  imports: [],
  templateUrl: './person-manager.html',
  styleUrl: './person-manager.scss'
})
export class PersonManager {

  people: any;
  sub: any;
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.loadPeople();
  }

  filterPeople() {

  }

  loadPeople() {
    this.sub = this.peopleService.getPeople().subscribe((data: any) => {
      this.people = data.people;
      console.log('people', this.people);
      if (this.sub) this.sub.unsubscribe();
    });
  }

  refresh() {
    this.loadPeople();
  }
}
