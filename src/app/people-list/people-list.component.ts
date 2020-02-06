import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../../shared/people-api.service';
import { Constants } from '../constants/constants';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  providers: [
    PeopleService
]
})
export class PeopleListComponent implements OnInit {

  @Input() pet: string;

  title = 'Pets by Gender';
  pets = {};
  peopleGender: Array<string>;
  genderToDisplay = 'Male';

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
   // this.petTypeToShow = 'Cat';//this.pet;
    this.getPeople();
  }

  getPeople() {

      this.peopleService.getPeople().subscribe(pets => {
      this.pets = this.groupByGender(pets);
      this.peopleGender = Object.keys(this.pets);
  });
  }

  groupByGender( petData ) {
    const genderData = {};
    for ( const owner of petData) {
        if ( owner.gender && Array.isArray(owner.pets) && owner.pets.length) {
            if (!genderData[owner.gender]) {
                genderData[owner.gender] = [];
            }
            genderData[owner.gender] = genderData[owner.gender].concat(this.getPetByType(owner.pets, Constants.PetTypeToDisplay));
        }
    }
    return genderData;
  }

  getPetByType(pets, type) {
    const pets1 = [];
    if (!Array.isArray(pets)) {
        return;
    }
    for(const pet of pets){
        if (type === pet.type) {
            pets1.push(pet);
        }
    }
    return pets1;
}
}
