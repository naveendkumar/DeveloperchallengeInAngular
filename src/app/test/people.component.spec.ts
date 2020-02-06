import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PeopleListComponent } from '../people-list/people-list.component';
import { PeopleService } from '../../shared/people-api.service';

describe('PeopleListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PeopleListComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [PeopleService],
    }).compileComponents();
  }));

  it('should create the Pet Component', async(() => {
    const fixture = TestBed.createComponent(PetComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Pets data Directory'`, async(() => {
    const fixture = TestBed.createComponent(PetComponent);
    const pet = fixture.debugElement.componentInstance;
    expect(pet.title).toEqual('Pets data Directory');
  }));

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(PetComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Pets data Directory');
  }));

  it('should render Gender Male & Female as H3', async(() => {
    const fixture = TestBed.createComponent(PetComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const h3Elements = compiled.querySelectorAll('H3');
    expect(h3Elements[0].textContent).toContain('Cat of Male owners (4)');
    expect(h3Elements[1].textContent).toContain('Cat of Female owners (3)');
  }));

  it('should render 4 Cats for Male Owners', async(() => {
    const fixture = TestBed.createComponent(PetComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.Male>div').length).toEqual(4);
  }));

  it('should render 3 Cats for Female Owners', async(() => {
    const fixture = TestBed.createComponent(PetComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.Female>div').length).toEqual(3);
  }));

  it('should render Garfield, Tom, Max, Jim under Male', async(() => {
    const catsUnderMale = ['Garfield', 'Tom', 'Max', 'Jim'];
    let notFound = false;
    const fixture = TestBed.createComponent(PetComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // tslint:disable-next-line: only-arrow-functions
    compiled.querySelectorAll('.Male>li').forEach(function(ele) {
      if (-1 === catsUnderMale.indexOf(ele.textContent)) {
        notFound = true;
      }
    });
    expect(notFound).toEqual(false);
  }));


  it('should render Garfield, Tabby, Simba under Female', async(() => {
    const catsUnderMale = ['Garfield', 'Tabby', 'Simba'];
    let notFound = false;
    const fixture = TestBed.createComponent(PetComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // tslint:disable-next-line: only-arrow-functions
    compiled.querySelectorAll('.Female>li').forEach(function(ele) {
      if (-1 === catsUnderMale.indexOf(ele.textContent)) {
        notFound = true;
      }
    });
    expect(notFound).toEqual(false);
  }));
});
