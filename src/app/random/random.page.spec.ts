import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RandomPage } from './random.page';

describe('RandomPage', () => {
  let component: RandomPage;
  let fixture: ComponentFixture<RandomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RandomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
